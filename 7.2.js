const readlineSync = require("readline-sync");
// Les deux premiers chiffres sont 1 , puis 2(1+1) , ensuite 3(1+2) , 5(2+3) etc: 1, 1, 2, 3, 5, 8, 13, 21... .

function fibonacci(n) {
//On créer un tableau commençant par 0 et 1
  let serie = [0, 1];  
// On incrémante le tabeau jusqu'au nombre de fois choisi
  for (i = 2; i <= n; i++) {
// On créer la formule du fibonacci : Fn = Fn-1 + Fn-2
    serie[i] = serie[i - 1] + serie[i - 2];
  } 
  return serie;
}

// on met comme argment le nombre de fois qu'on veut boucler
console.log(fibonacci(26));



