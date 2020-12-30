const slideContainer=document.querySelector(".slider-container");
const slideRight=document.querySelector(".right-slide");
const slideLeft=document.querySelector(".left-slide");
const div1=document.querySelector("#div1");
const div2=document.querySelector("#div2");
const div3=document.querySelector("#div3");
const div4=document.querySelector("#div4");
const signInTitle=document.getElementById("signInTitle");
const signUpTitle=document.getElementById("signUpTitle");

signInTitle.addEventListener("click",()=>{

div2.style.display="flex";
div1.style.display="none";

div3.style.display="none";
div4.style.display="flex";

});

signUpTitle.addEventListener("click",()=>{
  
    div2.style.display="none";
div1.style.display="flex";

div3.style.display="flex";
div4.style.display="none";
})