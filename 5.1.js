const readlineSync = require("readline-sync");

function askTvSerie(){
    let userRep = [
        {seriePref : readlineSync.question('Quelle est votre série préférée ?')},
        {DateProduction : readlineSync.question('Quelle est sa date de production?')},
        {NomMembreProduction : readlineSync.question('Sitez quelques membres de  la production')}
    ] 
    return userRep
};


console.log(askTvSerie());

