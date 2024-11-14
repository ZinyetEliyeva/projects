"use strict";

const header=document.querySelector("#header .headbox")
const navIcon=document.querySelector("#header .nav-icon")
const menuclose=document.querySelector(".responsive .menuclose")
const responsive=document.querySelector(".responsive")
const headbox=document.querySelector("#header .headbox")

navIcon.addEventListener("click",function(){
    responsive.style.display="block";
 
})

menuclose.addEventListener("click",function(){
    responsive.classList.add("d-none") 
})