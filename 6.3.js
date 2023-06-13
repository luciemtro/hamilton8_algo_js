const readlineSync = require("readline-sync");

class Animal {
    constructor(greeting, name) {
        this.greeting = greeting;
        this.name = name;
    }    
    sayHello() {
        return `${this.greeting}! le ${this.name}!`;
    }
}
class Cat extends Animal {
    constructor(name){
        super("Miaouw", name)
    }
}
class Dog extends Animal {
    constructor(name){
        super("wouuufff !", name)
    }    
}
const lechien = new Dog("chien");
const lechat = new Cat ("chat");
console.log(lechien.sayHello());
console.log(lechat.sayHello());

