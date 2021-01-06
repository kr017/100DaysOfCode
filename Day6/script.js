


const dobField=document.querySelector("#dob-field");
const resultSection=document.querySelector("#result-section");
const timezone=`<script 
data-require="moment-timezone.js@*" 
src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.32/moment-timezone.min.js" 
></script>`

dobField.addEventListener("change",()=>{
    

    var now = moment(new Date()); //todays date
    var dob=dobField.value;
    var end = moment(dob);
    var duration = moment.duration(now.diff(end));
    console.log(duration)

var years=duration._data.years>10?duration._data.years:"0"+duration._data.years;
var months=duration._data.months>10?duration._data.months:"0"+duration._data.months;
var days=duration._data.days>10?duration._data.days:"0"+duration._data.days;
var hours=duration._data.hours>10?duration._data.hours:"0"+duration._data.hours;
var minutes=duration._data.minutes>10?duration._data.minutes:"0"+duration._data.minutes;
var seconds=duration._data.seconds>10?duration._data.seconds:"0"+duration._data.seconds;
   
    resultSection.innerHTML=`
    <div><span class="head-value" >${years}</span><span>Years</span></div>
    <div><span class="head-value" >${months}</span><span>Months</span></div>
    <div><span class="head-value" >${days}</span><span>Days</span></div>
    <div><span class="head-value" >${hours}</span><span>Hours</span></div>
    <div><span class="head-value" >${minutes}</span><span>Minutes</span></div>
    <div><span class="head-value" >${seconds}</span><span>Seconds</span></div>

    `
    // debugger
    // console.log(moment.tz(new Date(), "America/Los_Angeles").format("LLLL"))
})



// https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.32/moment-timezone.min.js