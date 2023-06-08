const readlineSync = require("readline-sync");
//Je demande et stock la largeur du rectangle de l'utilisateur 
let userWidth = readlineSync.questionInt('Quelle est la largeur de votre rectangle ?');
//Je demande et stock la hauteur du rectangle de l'utilisateur
let userHeight = readlineSync.questionInt('Quelle est la longueur de votre rectanlgle ?');
//Je créer une fonction qui multiplira deux nombres et renverra le resultat, la largeur et la hauteur dans cette circonstance
let calcSurface = (width, height)=>{
    return width * height;
}
//Je fais un console log en utilisant ma fonction en donnant deux attributs, la largeur stocker et la hauteur stocker de l'utilisateur
//Ce qui retourne la largeur multipliée par la hauteur de son rectangle.
console.log('La surface de votre rectangle est de ' + (calcSurface(userWidth, userHeight)) + ' m2');
