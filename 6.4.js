const readlineSync = require("readline-sync");

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get name(){
        return this.firstname + " " + this.lastname;
    }
    set name(val){
        this.firstName = val.split(" ")[0];
        this.lastname = val.split(" ")[1];
    }
    
}

let person = new Person("Lucie", "Monteiro");
console.log(person.name);
person.firstname = "claudia";
person.lastname = "zezette";
console.log(person.name);