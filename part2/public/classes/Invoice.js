// classes
export class Invoice {
    // three access levels: public, private, and readonly
    // they are selve explantaory
    // readonly client: string;
    // readonly details: string;
    // readonly amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
