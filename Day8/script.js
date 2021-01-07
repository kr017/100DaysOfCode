
// var moment = require(moment);
// import moment from 'moment';

const menuItem=document.querySelector(".menu-item");
const actionItem=document.querySelector("#action-item");


menuItem.addEventListener("click",()=>{
    // debugger
    actionItem.className ='animateMe circle action';
})