const readlineSync = require("readline-sync");
let n = readlineSync.questionInt('Combien de nombres voulez-vous additionner ? ');
let result = 0;
for (i = 1 ; i <= n ; i++){
    let number = readlineSync.questionInt('Entrez un nombre'); 
    result += n; 
}
console.log('Your result is ' + result);


     

      
     
