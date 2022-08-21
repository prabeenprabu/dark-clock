const deg = 6;
let mn = document.getElementById("mn");
let hr = document.getElementById("hr");
let sc = document.getElementById("sc");

setInterval(() => {
    let day = new Date();
    //getting current time
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    //set the time in clock
    hr.style.transform = `rotateZ(${hh + day.getMinutes() / 6}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 0001);
