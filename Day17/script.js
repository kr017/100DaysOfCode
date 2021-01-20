let directionInput=document.querySelector("#direction");
let colorCountInput=document.querySelector("#color-count");
let break1Input=document.querySelector("#break1-color");
let break2Input=document.querySelector("#break2-color");
let break3Input=document.querySelector("#break3-color");
let break4Input=document.querySelector("#break4-color");

let div3Color=document.querySelector("#div3-color");
let div4Color=document.querySelector("#div4-color");

let demoDiv=document.querySelector("#demo-div");
let codeDiv=document.querySelector("#code-div");
let color1Input=document.querySelector("#colorBox1");
let color2Input=document.querySelector("#colorBox2");
let color3Input=document.querySelector("#colorBox3");
let color4Input=document.querySelector("#colorBox4");
let directionDiv=document.querySelector("#direction-div");
let gradientTypeInput="linear";


let break1=0,break2=0,break3=0,break4=0;
let color1="#F37335",color2="#FDC830",color3="#11998e",color4="#0575E6";
colorboxColor="#1c26e6",shadowColor="#000000";
let direction=180,colorCount=2;
color1Input.oninput=()=>{
    color1=color1Input.value;
    makeShadowChanges();

}

color2Input.oninput=()=>{
    color2=color2Input.value;
    makeShadowChanges();
}

color3Input.oninput=()=>{
    color3=color3Input.value;
    makeShadowChanges();
}

color4Input.oninput=()=>{
    color4=color4Input.value;
    makeShadowChanges();
}

directionInput.oninput=()=>{
    
    direction=directionInput.value;
    makeShadowChanges();
}



function handleTypeChange(input){
    gradientTypeInput=input.value;

    if(gradientTypeInput=="radial")
    directionDiv.style.display="none";
    else 
    directionDiv.style.display="block";
    makeShadowChanges();
    
}
handleChange=()=>{
    
   colorCount= colorCountInput.selectedOptions[0].value;
   if(colorCount==2)
   div3Color.style.display="none",div4Color.style.display="none";
   else if(colorCount==3)
   div3Color.style.display="block",div4Color.style.display="none";
   else if(colorCount==4)
   div3Color.style.display="block",div4Color.style.display="block"; 
   else
   div3Color.style.display="none",div4Color.style.display="none"; 


}



break1Input.oninput=()=>{
    
    break1=break1Input.value;
    makeShadowChanges();
}

break2Input.oninput=()=>{
    
    break2=break2Input.value;
    makeShadowChanges();
}

break3Input.oninput=()=>{
    
    break3=break3Input.value;
    makeShadowChanges();
}

break4Input.oninput=()=>{
    
    break4=break4Input.value;
    makeShadowChanges();
}



function makeShadowChanges() {
    // demoDiv.style.boxShadow=tl+"px"+" "+tr+"px"+" "+bl+"px"+" "+br+"px"+" "+shadowColor;     
                                    // (to bottom, #33ccff 14%, #ff99cc 150%);
   
   
    
    
    if(gradientTypeInput=="linear"){
        if(colorCount==4){
            demoDiv.style.backgroundImage="linear-gradient("+direction+"deg, "+
                                            color1+" "+break1+"%,"+
                                            color2+" "+break2+"%,"+
                                            color3+" "+break3+"%,"+
                                            color4+" "+break4+"%)";
            }else if(colorCount==3){
                demoDiv.style.backgroundImage="linear-gradient("+direction+"deg, "+
                color1+" "+break1+"%,"+
                color2+" "+break2+"%,"+
                color3+" "+break3+"%)";
            }else{
                demoDiv.style.backgroundImage="linear-gradient("+direction+"deg, "+
                color1+" "+break1+"%,"+
                color2+" "+break2+"%)";
            }  

    }
    if(gradientTypeInput=="repeating-linear"){

        if(colorCount==4){
            demoDiv.style.backgroundImage="repeating-linear-gradient("+direction+"deg, "+
                                            color1+" "+break1+"%,"+
                                            color2+" "+break2+"%,"+
                                            color3+" "+break3+"%,"+
                                            color4+" "+break4+"%)";
            }else if(colorCount==3){
                demoDiv.style.backgroundImage="repeating-linear-gradient("+direction+"deg, "+
                color1+" "+break1+"%,"+
                color2+" "+break2+"%,"+
                color3+" "+break3+"%)";
            }else{
                demoDiv.style.backgroundImage="repeating-linear-gradient("+direction+"deg, "+
                color1+" "+break1+"%,"+
                color2+" "+break2+"%)";
            }    

    }
    if(gradientTypeInput=="radial"){

        if(colorCount==4){
            demoDiv.style.backgroundImage="radial-gradient("+"circle"+", "+
                                            color1+" "+break1+"%,"+
                                            color2+" "+break2+"%,"+
                                            color3+" "+break3+"%,"+
                                            color4+" "+break4+"%)";
            }else if(colorCount==3){
                demoDiv.style.backgroundImage="radial-gradient("+"circle"+", "+
                color1+" "+break1+"%,"+
                color2+" "+break2+"%,"+
                color3+" "+break3+"%)";
            }else{
                demoDiv.style.backgroundImage="radial-gradient("+"circle"+", "+
                color1+" "+break1+"%,"+
                color2+" "+break2+"%)";
            }    
    }

     codeDiv.innerText=demoDiv.style.backgroundImage;                               
}
