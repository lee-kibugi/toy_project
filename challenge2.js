let speed = prompt("enter speed")
if (speed < 70){
    console.log("ok")
}else {
    let exceded = speed - 69;
    let demeritPoints = Math.floor(exceded / 5);

    console.log("Points: " + demeritPoints);
}