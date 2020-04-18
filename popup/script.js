const numDays = 1;
const initialDelay=2000;
//utility function to erase a single cookie
function eraseCookie(name) {
    setCookie(name, "", -1);
}
//method that uses the utility function eraseCookie(name) in order to erase all cookies
function eraseCookies() {
    const cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
        eraseCookie(cookies[i].split("=")[0]);
}
//method for setting a cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//method for retrieving a particular cookie
function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//method for checking if a cookie has been set or not (in order to decide on how to display the modal)
function checkCookie() {
    const user = getCookie("username");
    if (user != "") { return true } //if cookie is set, return true
    else { return false } //if cookie is not set, return false
}
//method for handling the popup button click, set cookie on click
function handleButtonClick() {
    setCookie("username", "user", numDays)
}
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user loads the page, open the modal
window.onload =  () => {
    if (!checkCookie()) {
        setTimeout(function () {
            modal.style.display = "block";
        }, initialDelay);
    }
}
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
    setCookie("username", "user", numDays) //set cookie for 30 days on close
}
// When the user clicks anywhere outside of the modal, close it
window.onclick =  (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        setCookie("username", "user", numDays) //set cookies on close
    }
}