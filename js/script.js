// Check if they are user Hide Sign up and sign in (links) and show user ul
let userInfo = document.querySelector('#user_info');
let userDom = document.querySelector('#user');
let links = document.querySelector('#links');
let logOut = document.querySelector('#logout');


let checkUser = window.localStorage.getItem('username');
if (checkUser) {
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = checkUser + ` <i class="fa-solid fa-user"></i> `;
}
else {
    userInfo.remove();
}

// Menu Toggle Responsive mobile will max-width 768px
let navigation = document.querySelector('#nav');
let menuToggle = document.querySelector('.menuToggel');

menuToggle.addEventListener("click", function () {
    navigation.classList.toggle('active');
});


// Log Out button Remaove All data from local storage 
logOut.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = 'register.html';
});

// * ----------------------------------
// ! Third section Read More
// * ----------------------------------

let readMoreBtn = document.querySelector(" .info .descrip .read-more-btn");
let textMore = document.querySelector(" .info .descrip .text");
readMoreBtn.addEventListener("click", () => {
    textMore.classList.toggle("show");
});


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
    arrPaginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index')); // return number
        theChecker();
    }
}


// trigger the checker func
theChecker();

// Animation slide 
window.setTimeout(anima, 3500);

function anima() {
    currentSlide++;
    theChecker();
}

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

// ! -------------- Categry Section 
let indecator = document.querySelector(".category .indecator").children;
let main = document.querySelector(".category  .items").children;

for (let i = 0; i < indecator.length; i++) {
    indecator[i].addEventListener('click', function () {
        for (let q = 0; q < indecator.length; q++) {
            indecator[q].classList.remove('active');
        }
        this.classList.add('active');
        const displayItem = this.getAttribute('data-filter');
        for (let y = 0; y < main.length; y++) {
            main[y].style.transform = 'scale(0)';
            setTimeout(() => {
                main[y].style.display = 'none';
            }, 500)

            if (main[y].getAttribute('data-category') == displayItem || displayItem == 'all') {
                main[y].style.transform = 'scale(1)';
                setTimeout(() => {
                    main[y].style.display = 'block';
                }, 500)

            }
        }

    })

}
// * ----------------------------------
// !  products Section
// * ----------------------------------
// Define Products  
let productsDom = document.querySelector(".products");
let cartsProductsDom = document.querySelector(".products-added div");
let badgeCount = document.querySelector(" .header-content .badge");

// Array of Products 'Objscts'
let products = [
    {
        id: 0,
        title: 'Shoes Model 999dx Nike',
        size: 'large',
        imageUrl: 'images/shoes-1-produ.jpg'
    },
    {
        id: 1,
        title: 'Shoes Model 1002 Nike ',
        size: 'small',
        imageUrl: 'images/shoes-3-produ.jpg'
    },
    {
        id: 2,
        title: 'Shoes Model XYZ12 Nike',
        size: 'medium',
        imageUrl: 'images/shoes-2-produ.jpg'
    },
    {
        id: 3,
        title: 'Shoes Model 2022 Nike',
        size: 'large',
        imageUrl: 'images/shoes-4-produ.jpg'
    },
    {
        id: 4,
        title: 'Shoes Model kalL Nike',
        size: 'small',
        imageUrl: 'images/shoes-5-produ.jpg'
    },
    {
        id: 5,
        title: 'Shoes Model QW213 Nike',
        size: 'medium',
        imageUrl: 'images/shoes-6-produ.jpg'
    }
];

// ?---------------------------------
// * I had a problem here with .map()  :: map show Extra comma after each element of array
// * because innerHtml Take String and map() return array >> I have two Solution
// ?---------------------------------


// * First : add join('') after map() to convert to string
// function Drawprod(item) {
//     return ` <div class="product-item">
//                     <img src="${item.imageUrl}" class="prod-img" alt="Shoes-nike1">

//                     <div class="prod-desc">
//                         <h3> ${item.title} </h3>
//                         <p>lore Lorem ipsum dolor nsectetur adipisicing elit.</p>
//                         <span> Size: ${item.size}</span>
//                     </div>

//                     <div class="prod-actions">
//                         <button class="add-to-cart">Add to cart</button>

//                         <i class="fav fa-solid fa-heart"></i>
//                     </div>

//                 </div> `;
// }
// productsDom.innerHTML +=products.map(Drawprod).join('');
//----------------------

// * Second : add directly the element <div> into page when looping using map()
function drawProductUL() {

    let product = products.map((item) => {
        productsDom.innerHTML += `
                <div class="product-item">
                    <img src="${item.imageUrl}" class="prod-img" alt="Shoes-nike1">

                    <div class="prod-desc">
                        <h3> ${item.title} </h3>
                        <p>lore Lorem ipsum dolor nsectetur adipisicing elit.</p>
                        <span> Size: ${item.size}</span>
                    </div>

                    <div class="prod-actions">
                        <button class="add-to-cart" id="${item.id}" >Add to cart</button>
                        <i class="fav fa-solid fa-heart"></i>
                        <span> Price: 59.99$ </span>
                    </div>

                </div>
        `;
    });
}
drawProductUL();
//----------------------
//  Add To Cart and Login Checker
let btnAddCart = Array.from(document.querySelectorAll('.add-to-cart'));

//  function to check login user when click Add to cart
let localLength = window.localStorage.length;
function checkLogAddToCart() {

    if (localLength) {
        //  ِِActivation button to add items
        btnAddCart.map((e) => {
            e.addEventListener("click", function () {
                addItemToCart(parseInt(e.id)); // pass Argument to function Above  in addEventListener
            })
        });

        // ============ display ul on click on cart
        let cartIcone = document.querySelector(".header-content .cart");
        let ulProducts = document.querySelector(".products-added ");
        cartIcone.addEventListener("click", function () {
            ulProducts.classList.toggle("active");
        });

    }
}
if(window.localStorage.length >= 2) {
    checkLogAddToCart();
}


// if local empty(No User) 
btnAddCart.map((e) => {
    e.addEventListener('click', function () {
        if (localLength == 0)
            window.location.href = 'register.html';
    }, { once: true });
})



let arrLocalStorageProduct = []; // this array store the products that choose to set in local storage
//  get from local and convert to Array with make object and push into array
function GetConvertArr() {
    // get all products from local.. 
    let allPro = JSON.parse(window.localStorage.getItem("arr")); // Prototype Array of objects :: Objects

    const key = Object.keys(allPro);
    const map1 = new Map();

    // set element of product from object allpro into new map
    for (let i = 0; i < key.length; i++) {
        map1.set(key[i], allPro[i]);
    }

    for (let i = 0; i < key.length; i++) {
        let obj = {
            id: map1.get(key[i]).id,
            title: map1.get(key[i]).title,
            size: map1.get(key[i]).size,
            imageUrl: map1.get(key[i]).imageUrl,
        };
        arrLocalStorageProduct.push(obj);
    }
}
if (window.localStorage.getItem("arr")) {
    GetConvertArr();
}

// function to Add item to Cart => get the id of item and found it 
function addItemToCart(id) {
    let choosenItem = products.find(item => item.id === id);

    // Set to local after push item into  array arrLocalStorageProduct
    arrLocalStorageProduct.push(choosenItem);
    // console.log(arrLocalStorageProduct);

    cartsProductsDom.innerHTML += `<p>${choosenItem.title} <i id="${choosenItem.id}" onclick="removeItemCart(${choosenItem.id})" class="fa-solid fa-trash"></i> </p> `;

    window.localStorage.setItem("arr", JSON.stringify(arrLocalStorageProduct))

    // add count to badge (cart icon)
    let productlengthCart = document.querySelectorAll(".products-added div p");
    badgeCount.style.display = "block";
    badgeCount.innerHTML = productlengthCart.length;


}

//  function to remove item from localstorage
function removeItemCart(id) {
    // find element id that choose
    let item = arrLocalStorageProduct.find((e) => {
        return e.id === id;
    });

    // delet from local storage (send index of element)
    deleteItem(arrLocalStorageProduct.indexOf(item));

    // delete from div
    document.getElementById(id).parentElement.remove();
    // decreas counter on icone cart
    let productlengthCart = document.querySelectorAll(".products-added div p");
    badgeCount.innerHTML = productlengthCart.length;
}

// function To Delete Item from localstorage
function deleteItem(index) {
    // Get the index of element and splice it
    arrLocalStorageProduct.splice(index, 1);
    // After splice array (delete element) push the new array in localStorage
    window.localStorage.setItem("arr", JSON.stringify(arrLocalStorageProduct));
}

// function to get products from local and add them to <div> p 
function getProductsInLocal() {
    // get all products from local.. 
    let allPro = JSON.parse(window.localStorage.getItem("arr")); // Prototype Array of objects :: Objects
    // console.log(allPro);
    // console.log(typeof (allPro));
    const key = Object.keys(allPro);
    const map1 = new Map();

    // set element of product from object allpro into new map
    for (let i = 0; i < key.length; i++) {
        map1.set(key[i], allPro[i]);
    }

    // set element from map into div
    for (let i = 0; i < key.length; i++) {
        cartsProductsDom.innerHTML += `<p>${map1.get(key[i]).title} <i id="${map1.get(key[i]).id}" onclick="removeItemCart(${map1.get(key[i]).id})" class="fa-solid fa-trash"></i> </p> `;

    }

    if (allPro.length > 0) {
        badgeCount.style.display = "block";
        badgeCount.innerHTML = allPro.length;
    }

}
if (localStorage.getItem("arr")) {
    getProductsInLocal();
}
// ========
// ! Search function 
//==========
let searchInp = document.getElementById("search");

searchInp.addEventListener("input", function (e) {
    const value = e.target.value;
    products.forEach(user => {
        const isVisible = user.title.includes(value) || user.size.includes(value.toLocaleLowerCase());
        let parent = document.getElementById(`${user.id}`).parentNode.parentNode;
        if (!isVisible) {
            parent.classList.add("hide");
        } else {
            parent.classList.remove("hide");
        }
    })
})
// ========
// ! Achievment section increas number on scroll
//==========
let nums = document.querySelectorAll(".nums .num .number");
let section = document.querySelector(".ach");
let started = false // Function Start  ? No
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal); // for increas all at the same time

}
