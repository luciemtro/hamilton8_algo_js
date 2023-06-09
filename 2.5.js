const readlineSync = require("readline-sync");
let userFavoriteNumber = readlineSync.question('Enter your favorite number please');
 

 
while (userFavoriteNumber != 42){
  console.log("vous n'avez pas trouvé");
  let userFavoriteNumber = readlineSync.question('Enter your favorite number please');
}


 
 

