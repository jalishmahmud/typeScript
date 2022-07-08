import { Player } from './classes/Player.js';
const mashrafi = new Player('Mashrafi', 40, "Bangladesh");
const shakib = new Player("Shakib", 30, "Bangladesh");
const players = [];
players.push(shakib);
players.push(mashrafi);
console.log(shakib.country);
console.log(shakib.age);
// class access modifiers
class Student {
    /*  name: string;
        age: number;
        country: string; */
    /*  constructor(n: string, a: number, c: string) {
         this.name = n;
         this.age = a;
         this.country = c;
     } */
    // shortcut
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} form ${this.country} is playing`);
    }
}
const kamal = new Student('Mashrafi', 40, "Bangladesh");
const students = [];
