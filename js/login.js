
// login Validation 
let username = document.querySelector("#user");
let password = document.querySelector("#password");
let login_btn = document.querySelector("#login");


// let getUser = window.localStorage.getItem('username');
let getUser = window.localStorage.getItem('username');
let getPass = window.localStorage.getItem('password');


login_btn.addEventListener("click", login)


function login(e) {
    e.preventDefault();

    checkInput();
    // Check if All inputs validat
    if (hasSuccsess())
        // redirect to login page for validation After 1.5 sec
        setTimeout(() => { window.location.href = 'index.html';}, 1500)
}



// Check Inputs values 
function checkInput() {
    // Get Value From Inputs
    let userValue = username.value.trim(); // ? trim() for remove white spaces
    let passValue = password.value.trim();

    // username ----------------
    if (userValue === getUser) {
        setSeccussFor(username);
    }
    else if (userValue === '') {
        // Show Error 
        // Add Error class
        setErrorFor(username, "Username Can't be blank");
    }
    else {
        // Add Seccuss Class
        setErrorFor(username, "Wrong User Name");
    }
    // password----------------
    if (passValue === '')
        setErrorFor(password, "Password Can't be blank");
    else if (passValue !== getPass)
        setErrorFor(password, " Wrong Password");
    else if (passValue.length <= 8 && passValue != '')
        setErrorFor(password, "Password should be more than 8 character")
    else if (passValue === getPass) { setSeccussFor(password); console.log("True password"); }

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
// Check if all input has success class
function hasSuccsess() {
    if (username.parentElement.classList.contains('success') && password.parentElement.classList.contains('success'))
        return true;
}
