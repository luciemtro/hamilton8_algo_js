const readlineSync = require("readline-sync");

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get nameAge(){
        return "Hi, je m'appelle " + this.name + " et j'ai " + this.age + " ans.";
    }
    set nameAge(val) {
        this.name = val.split(" ")[0];
        this.age = val.split(" ")[1];
      }
      talk() {
        console.log("Hi, je m'appelle " + this.name + " et j'ai " + this.age + " ans");
      }
}
let skittyCat = new Cat("Skitty", "9");
let pixelCat = new Cat("Pixel", "6") ;

console.log(skittyCat.nameAge);
console.log(pixelCat.nameAge);
