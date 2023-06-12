const readlineSync = require("readline-sync");

function askTvSerie(){
    const userRep = [
        {seriePref : readlineSync.question('Quelle est votre série préférée ?')},
        {DateProduction : readlineSync.question('Quelle est sa date de production?')},
        {NomMembreProduction : readlineSync.question('Sitez quelques membres de  la production')}
    ] 
    return userRep
}


function randomizeCast ( tvSerie ) {
    for (i = tvSerie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
            [tvSerie[i], tvSerie[j]] = [tvSerie[j], tvSerie[i]];
     }   
     return tvSerie;
}
const reponses = askTvSerie();
const reponsesMelangees = randomizeCast(reponses);
console.log('Réponses mélangées :', reponsesMelangees);
