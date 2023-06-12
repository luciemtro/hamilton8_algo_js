const readlineSync = require("readline-sync");

class personne {
    constructor(firstName, lastName){
        this.firstname = firstName;
        this.lastName = lastName ;
    }
    get sayHello(){
        return "Hello " + this.firstname + " " + this.lastName + "!";
    }
}

const lucie = new personne ("Lucie", "Monteiro");
console.log(lucie.sayHello);