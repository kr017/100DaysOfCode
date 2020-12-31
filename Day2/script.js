

var targetDate=new Date("Jan 1, 2021 00:00:00").getTime();
// console.log(targetDate);

var count=setInterval(function () {
    
    //current date time
    var now=new Date().getTime();
    // console.log(now);

    var diff=targetDate-now;
    
    var days=Math.floor(diff/(1000*60*60*24));
    days=days<10? "0"+days : days 
    var hours=Math.floor((diff/(1000*60*60))%24);
    hours=hours<10? "0"+hours : hours   //
    var mins=Math.floor(diff/(1000*60))%60;
    mins=mins<10? "0"+mins : mins   //
    var sec=Math.floor(diff/(1000)%60); 
    sec=sec<10? "0"+sec : sec   //

    // console.log(days ,":",hours,":",mins,":",sec);

    document.getElementById("result").innerHTML=days+":"+hours+":"+mins+":"+sec;

    if(diff<0){
        clearInterval(x);
        document.getElementById("result").innerHTML="Time Out";
    }
  

})

// setInterval(()=>{    document.getElementById("c1").style.backgroundColor="#"+Math.floor(Math.random()*65742).toString();
// },100)

