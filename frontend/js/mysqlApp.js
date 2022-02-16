
const mysql = require('mysql2')
const path = require('path')
const formidable = require('express-formidable')
const express = require('express')
const exp = require('constants')
const app = express()
const port = 9100

//start server at port 9100
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.listen(port, () => console.log(`server listening on port ${port}`))
app.use(express.static(path.join(__dirname, '../')))
app.use(formidable())

//connect to mySql database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'PMS_AM_1'
})
connection.connect((err) => {
    if(!err) console.log('Database connected successfully')
    else console.log(err)
})

//query database to read Employee Table
app.get('/Employee', (req, res) => {
    connection.query('select * from Employee', (err, data) => {
        if(!err) {
            res.writeHead(200, {'Content-Type': 'text/JSON'})
            res.write(JSON.stringify(data, null, 2))
            res.end()
        }
        else {
            res.write("Error reading Employee.json file")
            res.end()
            console.log("Error reading Employee.json file")
        }
    })
})

//query database to insert new employee record into Employee table
app.post('/AddEmployee', (req, res) => {
    var obj = Object.values(req.fields)
    connection.query('insert into Employee values ?', [[obj]] , (err) => {
        if(!err) console.log(`Successfully inserted ${obj[1]}`)
        else console.log(err);
    })
    res.statusCode = 302
    res.setHeader('Location', '/meetings.html#/employee')
    return res.end()
})

//query database to delete selected employee record from Employee table
app.post('/RemoveEmployee', (req, res) => {
    var obj = Object.values(req.fields)
    connection.query('delete from Employee where emp_id = ?', obj[0], (err) => {
        if(!err) console.log(`Successfully deleted ${obj[1]}`)
        else console.log(err)
    })
    return res.end()
})

//query database to update selected employee record in Employee table
app.post('/UpdateEmployee', (req, res) => {
    var obj = Object.values(req.fields)
    obj.push(obj[0])
    var updateQuery = 'update Employee set emp_id=?, emp_firstname=?, emp_lastname=?, emp_phone=?,'+
        ' emp_email=?, emp_address=?, emp_joiningdate=?, emp_password=? where emp_id =?'

    connection.query(updateQuery, obj, (err) => {
        if(!err) console.log(`Successfully updated ${obj[1]}`)
        else console.log(err)
    })
    res.statusCode = 302
    res.setHeader('Location', '/meetings.html#/employee')
    return res.end()
})