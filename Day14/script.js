let topLeft=document.querySelector("#top-left");
let topRight=document.querySelector("#top-right");
let bottomLeft=document.querySelector("#bottom-left");
let bottomRight=document.querySelector("#bottom-right");
let demoDiv=document.querySelector("#demo-div");

console.log(topLeft.value);

topLeft.oninput=()=>{
    let tl=topLeft.value;
    console.log(tl);
    // demoDiv.style.backgroundColor="red";
    demoDiv.style.borderTopLeftRadius=tl+"px";

}

topRight.oninput=()=>{
    let tr=topRight.value;
    demoDiv.style.borderTopRightRadius=tr+"px";
}


bottomLeft.oninput=()=>{
    let bl=bottomLeft.value;
    demoDiv.style.borderBottomLeftRadius=bl+"px";
}


bottomRight.oninput=()=>{
    let br=bottomRight.value;
    demoDiv.style.borderBottomRightRadius=br+"px";
}