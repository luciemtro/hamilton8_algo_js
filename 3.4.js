let arr = [5, 20, 12, 302, 58];
let min = arr[0];
let max = arr[0];
for (i = 0 ; i < arr.length ; i++){
    if(min > arr[i]){
        min = arr[i]
    }
}    
for (i = 0 ; i < arr.length ; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}   
console.log('Le nombre minimum est : ' + max); 
console.log('Le nombre minimum est : ' + min);

