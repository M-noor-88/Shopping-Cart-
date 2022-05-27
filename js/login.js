
// login Validation 
let username = document.querySelector("#user");
let password = document.querySelector("#password");
let login_btn = document.querySelector("#login");


login_btn.addEventListener("click", function (e) {
    e.preventDefault();

    //    if (username.value === "" || email.value === "" || password.value === "")
    // alert("Please Enter Data");
    checkInput();
    // Check if All inputs validat
    if (hasSuccsess())
        console.log("TRUE");


})


// Check Inputs values 
function checkInput() {
    // Get Value From Inputs
    let userValue = username.value.trim(); // ? trim() for remove white spaces
    let passValue = password.value.trim();

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
        setErrorFor(password, "Password should be more 8 character")
    else
        setSeccussFor(password);

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
