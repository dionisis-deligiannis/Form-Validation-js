let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required"
    }
    if(!name.match(/))
}