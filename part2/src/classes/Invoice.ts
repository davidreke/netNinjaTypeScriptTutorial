import {HasFormatter} from '../interfaces/HasFormatter.js'

// classes
export class Invoice implements HasFormatter {
    // three access levels: public, private, and readonly
    // they are selve explantaory
    // readonly client: string;
    // readonly details: string;
    // readonly amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}