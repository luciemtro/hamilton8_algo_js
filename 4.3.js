const readlineSync = require("readline-sync");
function rand10(){
    return  Math.floor(Math.random() * 10)+1;
}

function multirand(n){
    let array = [];
    for(i = 0 ; i < n ; i++){
     array[i]=rand10();
    }
    return array;
}

console.log(multirand(readlineSync.questionInt('entrez un nombre')));







