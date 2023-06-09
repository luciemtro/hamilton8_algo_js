function factoriel(a){
    let result = 1;
    for ( i = 1 ; i <= a ; i++){
        result = result * i;
    }
    return result;
}
console.log(factoriel(5));