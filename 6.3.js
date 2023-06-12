const readlineSync = require("readline-sync");

class Animal {
    constructor(name) {
        this.name = name;
    }    
    static greeting = 'Hi !';
    // or staticgreeting(){return " Hi !";}
    // sayHello() { return `${Animal.staticgreeting()}! I'm ${this.name}!`;
    sayHello() {
        return `${Animal.greeting}! I'm ${this.name}!`;
    }
}
class Cat extends Animal {
    sayHello() {
        return super.sayHello();
        }
}
class Dog extends Animal {
    sayHello() {
    return super.sayHello();
    }
}
const lechien = new Dog("le chien");
const lechat = new Cat ("le chat");
console.log(lechien.sayHello());
console.log(lechat.sayHello());

