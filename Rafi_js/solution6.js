let points = 0;
const checkSpeed = (speed) => {
    console.log(speed);
    console.log(points);
    if(speed<75) return "Ok";
    else{
        points = Math.floor((speed-70)/5);
        if(points<12) return `points:${points}`
        else return "License Suspended";
    }
}
const check = () => {
const p = document.getElementById("demo");
const speed = document.getElementById("speed").value;
const result = checkSpeed(speed);
p.innerHTML = result;
}

