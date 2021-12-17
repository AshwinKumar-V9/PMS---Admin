/*-----JS for index.html-----*/

function logIn()
{
    document.getElementsByTagName("title")[0].text = "Employee Dashboard"
    document.getElementById("login").style.display = "none"
    document.getElementById("dashboard").style.display = "flex"
}

function logOut()
{
    document.getElementsByTagName("title")[0].text = "Sign In"
    document.getElementById("login").style.display = "flex"
    document.getElementById("dashboard").style.display = "none"
}