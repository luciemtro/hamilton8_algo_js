const readlineSync = require("readline-sync");

function diviseurs() {
    let nombre = Math.floor(Math.random()*10000);
    console.log("Voici les diviseurs du nombre générer aléatoirement " + nombre + ":");
    // tant que i est inférieur ou égal = à notre nombre et divisable par 2 (Nombre entier positif), on boucle
    for (i = 1; i <= nombre / 2; i++) {
    // si mon nombre est modulo par i qui est strictement égal à 1, on return i
      if (nombre % i === 1) {
        console.log(i);
      }
    }
    
  }

console.log(diviseurs())