// m=ar^2/g   a=9.8 r=6.38*10^6   g=6.67*10^-11 or 1/6.67*10^11
let a=9.8;
let r=6.38*Math.pow(10,6);
let g=6.67*Math.pow(10,-11)
let m = a * Math.pow(r,2)/g;
document.write(m);