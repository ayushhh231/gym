let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let email = document.querySelector("#personEmail");

$(document).ready(function(){
    $("#subscribe").click(function(){
        if(email.value == ''){
            alert("Please provide email to subscribe");
        } else {
            alert("Subscribed successfully");
        }
    });
    $("#basic").click(function(){
        alert("Your basic plan has been activated");
    });
    $("#premium").click(function(){
        alert("Your premium plan has been activated");
    });
});

function calculateBMI() {
    let height = parseInt(document
            .querySelector("#personHeight").value);
  
    let weight = parseInt(document
            .querySelector("#personWeight").value);
  
    let result = document.querySelector("#result");
  
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    
    else {
  
        
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span> ☹`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span> ☺`;
  
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span> 😳`;
    }
};

function canSubmit(){
    var pwd = document.forms[0].txtPassword.value
    var cpwd = document.forms[0].txtConfirmPassword.value
    if(pwd == cpwd){
        alert("Logged In Successfully");
        return true;
    }
    else{
        alert("Please make sure that Password and Confirm Password are same..!!");
        return false;
    }
};


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});