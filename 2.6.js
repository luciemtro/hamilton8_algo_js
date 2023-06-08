const readlineSync = require("readline-sync");
let numberUser = readlineSync.question('Entrez un nombre entre 1 et 7');
switch(numberUser){
    case '1' : 
        console.log('Nous sommes lundi');
        break;
    case '2' : 
        console.log('Nous somme mardi');
        break;
    case '3' : 
        console.log('Nous sommes mercredi');
        break;
    case '4' : 
        console.log('Nous somme jeudi');
        break;
    case '5' : 
        console.log('Nous sommes vendredi');
        break;
    case '6' : 
        console.log('Nous somme samedi');
        break;
    case '7' : 
        console.log('Nous sommes dimanche');
        break;
    default : 
    console.log('Vous avez fait une erreur');
};


