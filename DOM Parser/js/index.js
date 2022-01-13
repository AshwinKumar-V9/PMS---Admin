/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile = './xml/employee.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
            displayTable()
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>NAME</th><th>AGE</th><th>SALARY</th><th>EMAIL</th><th>PHONE</th><th>DESIGNATION</th></tr>"

    var x = xmlDoc.getElementsByTagName("Employee")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Emp-name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Emp-age")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Emp-salary")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Emp-emailid")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Emp-phonenum")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Emp-designation")[0].childNodes[0].nodeValue + "</td>" +
            "<td><span class='material-icons' onclick='editRecord(" +i+ ")'>edit</span></td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>"
    }
    document.getElementById("table").innerHTML = table
}

//function to delete record
function deleteRecord(i)
{
    y = xmlDoc.getElementsByTagName("Employee")[i]
    var name = y.getElementsByTagName("Emp-name")[0].childNodes[0].nodeValue
    var reply = confirm("Do you want to delete record? \nName: " + name)
    if(reply == true)
    {
        xmlDoc.documentElement.removeChild(y)
        console.log("Record deleted: " + name)
        displayTable()
    }
}

function editRecord(i)
{
    console.log("edit " +(i + 1)+ " record")

}