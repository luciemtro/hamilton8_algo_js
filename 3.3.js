const readlineSync = require("readline-sync");

//methode values
let array1 = [5, 'salut', 12, 'plop'];
let array2 = Object.values(array1);
console.log(array2);

//methode concat
var Array3 = [5, 'salut', 12, 'plop'];
var Array4 = [];
Array4 = Array4.concat(Array3);
console.log(Array4)


//push
let array5 = [5, 'salut', 12, 'plop'];
let array6 = [];
Array.prototype.push.apply(array6, array5);
console.log(array6);