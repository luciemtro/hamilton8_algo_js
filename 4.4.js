const readlineSync = require("readline-sync");

function average(arr){
    let result = 0;
    for (i = 0 ; i < arr.length ; i++){
        result += arr[i];
    }
    result= (result / arr.length);
    return result
}

function min(arr){
    let min = arr[0];
    for (i = 0 ; i < arr.length ; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min
}

function max(arr){
    let max = arr[0];
    for (i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }     
    }
    return max
}

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

function allfunc(){
    array = multirand(readlineSync.questionInt('entrez un nombre'));
    console.log(array);
    console.log(average(array));
    console.log(min(array));
    console.log(max(array));
}

allfunc();










