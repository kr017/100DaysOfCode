let topLeft=document.querySelector("#top-left");
let topRight=document.querySelector("#top-right");
let bottomLeft=document.querySelector("#bottom-left");
let bottomRight=document.querySelector("#bottom-right");
let demoDiv=document.querySelector("#demo-div");
let sliders=document.getElementsByClassName("slider");
let colorInShadow=document.querySelector("#colorInShadow");
let colorInBox=document.querySelector("#colorInBox");
let tl=0,tr=0,bl=0,br=0,boxColor="#1c26e6",shadowColor="#000000";

colorInBox.oninput=()=>{
    boxColor=colorInBox.value;
    demoDiv.style.backgroundColor=boxColor;
}

colorInShadow.oninput=()=>{
    shadowColor=colorInShadow.value;
    makeShadowChanges();
}

topLeft.oninput=()=>{
    
    tl=topLeft.value;
    console.log(tl);
    makeShadowChanges();
}

topRight.oninput=()=>{
     tr=topRight.value;
     makeShadowChanges();
}


bottomLeft.oninput=()=>{
     bl=bottomLeft.value;
     makeShadowChanges();
}


bottomRight.oninput=()=>{
     br=bottomRight.value;
     makeShadowChanges();
}

function makeShadowChanges() {
    demoDiv.style.boxShadow=tl+"px"+" "+tr+"px"+" "+bl+"px"+" "+br+"px"+" "+shadowColor;     
}
