// Check if they are user Hide Sign up and sign in (links) and show user ul
let userInfo = document.querySelector('#user_info');
let userDom = document.querySelector('#user');
let links = document.querySelector('#links');
let logOut = document.querySelector('#logout');

let checkUser = window.localStorage.getItem('username');
if (checkUser) {
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = checkUser;
}
else {
    userInfo.remove();
}


// Menu Toggle Responsive mobile will max-width 768px


let navigation = document.querySelector('#nav');
let menuToggle = document.querySelector('.menuToggel');

menuToggle.onclick = function () {
    navigation.classList.toggle('active');

    // if (navigation.classList.contains('active')) {
    //     let header_con = navigation.parentElement;
    //     header_con.style.overflow = 'visible';
    // }
    // else
    //     header_con.style.overflow = 'hidden';
}

// function to Add name user to menu in mopile
// function setUserMenu(n) {
//     let name = document.querySelector(".user-Name");
//     name.innerHTML = n;
// }
// let navigation = document.querySelector('.header-content nav');
// let menuToggle = document.querySelector('.menuToggel');

// menuToggle.onclick = function () {
//     navigation.classList.toggle('active');
// }
// Log Out button Remaove All data from local storage 
logOut.addEventListener("click", (e) => {
    localStorage.clear();
    window.location = '../register.html';
})





// * ----------------------------------
// ! Slider Images in Home Section
// * ----------------------------------

// Get slider items || [Array.from[ES6]]
let sliderImages = Array.from(document.querySelectorAll(".slide-container .slide"));
// get number of slide
let slidecount = sliderImages.length;

// set current slide
let currentSlide = 1;

// Slide number Element
let slideNumElement = document.getElementById("slide-number");

// previous & Next button 
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

// Handle Click on Previous And Next button
nextButton.onclick = Next;
prevButton.onclick = Prev;

// Creat Main ul Element
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', "pagination-ul");

// creat Li items based on slide Array count
for (var i = 1; i <= slidecount; i++) {
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    // paginationItem.innerHTML = i;
    // Setitem content
    paginationItem.appendChild(document.createTextNode(i));

    // Appends item to ul
    paginationElement.appendChild(paginationItem);
}

// Append ul to Page 
document.getElementById('indecator').appendChild(paginationElement);

// Get pagination created ul
var paginationCreatedUL = document.getElementById('pagination-ul');

// Array from pagination bullets to use in  Function removeAllActive()
let arrPaginationBullets = Array.from(document.querySelectorAll(' #pagination-ul li'));

// loop through pagination bullets
for (let i = 0; i < arrPaginationBullets.length; i++) {
    arrPaginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index')); // return number
        theChecker();
    }
}


// trigger the checker func
theChecker();


// Next
function Next() {

    if (nextButton.classList.contains('dis'))
        return false;
    else {
        currentSlide++;
        theChecker();
    }

}
// prev
function Prev() {

    if (prevButton.classList.contains('dis'))
        return false;
    else {
        currentSlide--;
        theChecker();
    }
}



// Checker function 
function theChecker() {
    // set the slide number
    slideNumElement.textContent = (currentSlide) + ' / ' + (slidecount);
    remaoveAllActive();
    // set Active class to the current slide
    sliderImages[currentSlide - 1].classList.add('active');

    // set active class on pagination item 
    paginationCreatedUL.children[currentSlide - 1].classList.add('active');

    // check if the current slide is First
    if (currentSlide == 1) {
        // Add disabled class on prec button
        prevButton.classList.add('dis');
    }
    else {
        prevButton.classList.remove('dis');
    }
    // check if the current slide is the last
    if (currentSlide == slidecount)
        nextButton.classList.add('dis')
    else
        nextButton.classList.remove('dis');


}

//  Remove all active class from slides And pagination bullets
function remaoveAllActive() {
    //loop through slides
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    // loop on pagination bullets
    arrPaginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    })
}
// ! ------------------------------------------------------------------ 