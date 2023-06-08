const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your name please?');
let userFirstName = readlineSync.question('Can you give me your firstname please?');
let userCity = readlineSync.question('Can you give me your city please?');
console.log("Hello " + userName + ' ' + userFirstName + ' habitant à ' + userCity);