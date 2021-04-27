
var intervalID = setInterval(printTimeEverySecond, 1000);

function printTimeEverySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}