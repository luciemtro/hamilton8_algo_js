const readlineSync = require("readline-sync");
let userAge = readlineSync.question('How old are you ?');
if (userAge >= 18){
    console.log('Vous êtes majeur.')
}
else{
    console.log('Vous êtes mineur !')
}