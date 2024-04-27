let menu = document.querySelector('#menuBar');
let navbar = document.querySelector('.navmenu');

menu.onclick = () =>{
    navbar.classList.toggle('open');
}

// sticky scroll menu bar

window.onscroll = function() {myfunction()};

var navBar = document.getElementById('navbar');
var sticky = navBar.offsetTop;

function myfunction(){
    if (window.pageYOffset >= sticky){
        navBar.classList.add('sticky');
    }
    else{
        navBar.classList.remove("sticky");
    }
}






OR THIS TRY NYO ALIN DITO GUMANA



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
}
