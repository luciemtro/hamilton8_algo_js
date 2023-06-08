const readlineSync = require("readline-sync");
let userFavoriteNumber = readlineSync.question('Enter your favorite number please');
 

 
if (userFavoriteNumber == 42){
       console.log('Vous avez trouvez');
 
}
else {
  console.log("vous n'avez pas trouvé");
  let userFavoriteNumber = readlineSync.question('Enter your favorite number please');
};

 
 

