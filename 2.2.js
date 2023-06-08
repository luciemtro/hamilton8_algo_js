const readlineSync = require("readline-sync");
let minAge = readlineSync.question('Entrez un age minimum');
let maxAge = readlineSync.question('Entrez un age maximum');
let currentAge = readlineSync.question('Entrez un age actuel');



if ((currentAge > minAge) && (currentAge < maxAge)){
    console.log('Votre age actuel se trouve entre l\'age minimum et maximum')
}
else if(minAge >= maxAge){
    console.log('Vous avez fait une erreur');
}
else{
    console.log('Votre âge ne se trouve pas entre l\'age minimum et maximum')
}
