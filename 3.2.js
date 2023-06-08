let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

let result1 = 0;
let result2 = 0;

for ( i = 0 ; i < array1.length ; i++ ){
    result1 += array1[i];
}
result1 /= array1.length;
console.log(result1);

for ( i = 0 ; i < array2.length ; i++ ){
    result2 += array2[i];
}
result1 /= array2.length;
console.log(result2);
