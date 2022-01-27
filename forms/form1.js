
var user_name = document.getElementById("user_name")
var user_email = document.getElementById("user_email")
var user_phone = document.getElementById("user_phone")
var user_pswd = document.getElementById("user_pswd")
var user_dept = document.getElementById("user_dept")
var user_loc = document.getElementById("user_loc")


//event listener to lock numbers for name
user_name.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to lock characters for phone number
user_phone.addEventListener('keydown', (e)=>{
    if(/^[^0-9]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to lock numbers for department
user_dept.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to lock numbers for location
user_loc.addEventListener('keydown', (e)=>{
    if(/^[^a-zA-Z ]$/.test(e.key))
    {
        e.preventDefault()
    }
})

//event listener to validate user email
user_email.addEventListener('keyup', ()=>{
    const email_pattern = /^([a-z0-9_\.]+)@(([a-z0-9]+)\.){2}([a-z]{2,3})$/
    var validate_span = document.getElementById("user_email_validate")
    if(email_pattern.test(user_email.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Email'
    }
    else
    {
        validate_span.style.color = 'red'
        if (user_email.value.trim() == '')
        {
            validate_span.innerHTML = 'Email Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Email'
        }
    }
})

//event listener to validate user phone
user_phone.addEventListener('keyup', ()=>{
    const phone_pattern = /^[0-9]{10}$/
    var validate_span = document.getElementById("user_phone_validate")
    if(phone_pattern.test(user_phone.value.trim()))
    {
        validate_span.style.color = 'green'
        validate_span.innerHTML = 'Valid Phone'
    }
    else
    {
        validate_span.style.color = 'red'
        if (user_phone.value.trim() == '')
        {
            validate_span.innerHTML = 'Phone Required'
        }
        else
        {
            validate_span.innerHTML = 'Invalid Phone'
        }
    }
})

//event listener to validate user password
user_pswd.addEventListener('keyup', ()=>{
    var validate_span = document.getElementById("user_pswd_validate")
    if (user_pswd.value.trim() == '')
    {
        validate_span.style.color = 'red'
        validate_span.innerHTML = 'Password Required'
    }
    else
    {
        if(/^(.){8,20}$/.test(user_pswd.value.trim()))
        {
            validate_span.style.color = 'red'
            validate_span.innerHTML = 'Strength: Weak'
            if((user_pswd.value.trim().match(/[A-Z]/)) && (user_pswd.value.trim().match(/[a-z]/)))
            {
                validate_span.style.color = 'yellow'
                validate_span.innerHTML = 'Strength: Medium'
            }
            if((user_pswd.value.trim().match(/[0-9]/)) && (user_pswd.value.trim().match(/[\W]/)))
            {
                validate_span.style.color = 'green'
                validate_span.innerHTML = 'Strength: Strong'
            }
        }
        else
        {
            validate_span.style.color = 'red'
            validate_span.innerHTML = 'Invalid Password'
        }
    }
})