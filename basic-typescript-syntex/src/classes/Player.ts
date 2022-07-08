
import { IsPlayer} from '../interface/isPlayer.js';

export class Player implements IsPlayer{
    public name: string;
   public age: number;
   readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} form ${this.country} is playing`)
    }
}