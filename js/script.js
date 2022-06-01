// Check if they are user Hide Sign up and sign in (links) and show user ul
let userInfo = document.querySelector('#user_info');
let userDom = document.querySelector('#user');
let links = document.querySelector('#links');
let logOut = document.querySelector('#logout');

let checkUser = window.localStorage.getItem('username')
if (checkUser)
    {
        links.remove();
        userInfo.style.display = "flex"; 
        userDom.innerHTML = checkUser;
    }
// Log Out button Remaove All data from local storage 
logOut.addEventListener("click" , (e) => {
    localStorage.clear();
    window.location = '../register.html';
} )


// Menu Toggle Responsive mobile