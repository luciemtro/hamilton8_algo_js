const readlineSync = require("readline-sync");
number=1;
while (number <= 100){
    console.log(number);
    number ++;
    if(number%2 == 0 ){
        console.log(number/2);
    }
    else{
        console.log(number*3);
    }
}