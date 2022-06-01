// Regster User Validation

let form = document.querySelector('#form');
let username = document.querySelector("#user");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let register_btn = document.querySelector("#sign-up");

register_btn.addEventListener("click", function (e) {
    e.preventDefault();

    checkInput();
    // Check if All inputs validat
    if (hasSuccsess()) {
        window.localStorage.setItem("username", username.value);
        window.localStorage.setItem("email", email.value);
        window.localStorage.setItem("password", password.value);

        // redirect to login page for validation After 1.5 sec
        setTimeout(() => { window.location = '../login.html' }, 1500)

    }
})




// Check Inputs values 
function checkInput() {
    // Get Value From Inputs
    let userValue = username.value.trim(); // ? trim() for remove white spaces
    let passValue = password.value.trim();
    let emailValue = email.value.trim();

    // username ----------------
    if (userValue === '') {
        // Show Error 
        // Add Error class
        setErrorFor(username, "Username Can't be blank");
    }
    else {
        // Add Seccuss Class
        setSeccussFor(username);
    }
    // password----------------
    if (passValue === '')
        setErrorFor(password, "Password Can't be blank");
    else if (passValue.length <= 8 && passValue != '')
        setErrorFor(password, "Password should be more than 8 character")
    else
        setSeccussFor(password);
    // Email----------------
    if (emailValue === '')
        setErrorFor(email, "Email Can't be blank");
    else if (!isEmail(emailValue))
        setErrorFor(email, "Not Valid !");
    else
        setSeccussFor(email);

}



// Set Error Message And Class -----------------------
function setErrorFor(input, Message) {
    let formControl = input.parentElement; // .form-controll class
    let small = formControl.querySelector('small');

    // add Error message inside small tag 
    small.innerText = Message;
    // add error class 
    formControl.classList.add('error');
    formControl.classList.remove('success');
}


// Set Success Class -----------------------
function setSeccussFor(input) {
    let formControl = input.parentElement;
    formControl.classList.add('success');
    formControl.classList.remove('error');
}

// Show password Toogle Function -----------------------
const togglePassword = document.querySelector("#togglePassword");
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // this.classList.toggle('fa-solid fa-eye');
    // toggle the icon
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

// Function For Email Validation  -----------------------
function isEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

// Function For Check if All Input Has Class Seccuss -----------------
function hasSuccsess() {
    if (username.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && email.parentElement.classList.contains('success'))
        return true;
}
// function hasSuc()