const readlineSync = require("readline-sync");
let pointa = [4, 1];
let pointb = [1, 1];


function calcDistance(a, b){
    let axeX = Math.pow((a[0]-b[0]),2);
    let axeY = Math.pow((a[1]-b[1]),2);
    distance = Math.sqrt((axeX+axeY),2);
    return distance;
}

console.log(calcDistance(pointa, pointb));