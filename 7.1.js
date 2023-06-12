const readlineSync = require("readline-sync");
let reponse = readlineSync.questionInt("Devinez mon nombre entre 1 et 100 : ");


const result = Math.floor(Math.random()*10+10);

while(reponse != result){
if(reponse > result ){
    console.log('Trop haut !')
    reponse = readlineSync.questionInt("Devinez mon nombre entre 1 et 100 : ");
}
else if(reponse < result){
    console.log("Trop bas !");
    reponse = readlineSync.questionInt("Devinez mon nombre entre 1 et 100 : ");
}
}

if(reponse == result){
    console.log("BRAVO ! Vous avez deviné")
}

