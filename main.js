const onclick = document.querySelectorAll('.onclick');
const bgclick = document.querySelector('.menu-wrap .menu > div')


onclick.forEach(element => {
    element.addEventListener('click', (e) =>{
document.querySelector('.menu-wrap .toggler').checked = false});
});

bgclick.addEventListener('click', (e) =>{
document.querySelector('.menu-wrap .toggler').checked = false});

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errormsg = document.getElementById("errormsg");
    var text;

    errormsg.style.padding = "10px";

    if(name.length < 3){
        text = "Please enter name with more than 2 characters"
        errormsg.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length < 6){
        text = "Please enter vaild email"
        errormsg.innerHTML = text;
        return false;
    }

    if(message.length < 10){
        text = "Please enter at least 10 characters of message"
        errormsg.innerHTML = text;
        return false;
    }
    alert("Form submitted successfully!")
    return true;
}