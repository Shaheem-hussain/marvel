let moon=document.querySelector("header section.wrapper div.right i.far.fa-moon");
let sun=document.querySelector("header div.right i.far.fa-sun");
let body=document.querySelector("body");
let menuIcon=document.querySelector("header div.right #menu-icon");
let mobileMenu=document.querySelector("header div.right nav#mobile-menu");
let closeIcon=document.querySelector("header div.right #close-icon");
let overlay=document.querySelector("#spotlight section.wrapper span.overlay");
let mobileMoon=document.querySelector("header div.right nav#mobile-menu ul li a div.clr-mode i.far.fa-moon");
let mobileSun=document.querySelector("header div.right nav#mobile-menu ul li a div.clr-mode i.far.fa-sun")
moon.addEventListener("click",()=>{
    sun.classList.toggle("active");
    body.classList.toggle("dark");
    moon.classList.toggle("active");
});
sun.addEventListener("click",()=>{
    body.classList.toggle("dark");
    moon.classList.toggle("active");
    sun.classList.toggle("active");
})
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    // closeIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
})
closeIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    // closeIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
})
mobileMoon.addEventListener("click",()=>{
    mobileMoon.classList.toggle("active");
    body.classList.toggle("dark");
    mobileSun.classList.toggle("active");
})
mobileSun.addEventListener("click",()=>{
    mobileMoon.classList.toggle("active");
    body.classList.toggle("dark");
    mobileSun.classList.toggle("active");
    // closeIcon.classList.toggle("active");
})
console.log(menuIcon)