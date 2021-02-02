import { Invoice } from './classes/Invoice.js';
import { listTemplate } from './classes/ListTemplate.js';
import {Payment } from './classes/Payment.js';
import { HasFormatter} from './interfaces/HasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plubming work', 200)

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

// interfaces
// interfaces don't create objects that are of a class, they just test the variable to the requirements
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a:string ):void;
//     spend(a: number):number;
// }

// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log(`I spent ${amount}`)
//         return amount
//     }
// }

// console.log(me)

// const greetPerson = (person:IsPerson) => {
//     console.log(`Hello ${person.name}`)
// }

// greetPerson(me)


const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the luigi website', 350)

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {

    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let values:[string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
})

// const anchor = document.querySelector('a')!;

// // the excelementation mark tells us there will definately be a value

// // if(anchor){
// //     console.log(anchor.href)
// // }

// // console.log(anchor.href)

// // const form = document.querySelector('form')!;


// generics
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random()*100)

    return { ...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
// this won't work
// let docTwo = addUID('hello')

// console.log(docOne.name)

// generics with interfaces
// interface Resource <T> {
//     uid: number;
//     resourceName: string;
//     data: T
// }

// const docThree: Resource <object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'shaun'}
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shopping list',
//     data: ['bread,','milk']
// }

// console.log(docThree, docFour)

// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource <T> {
    uid: number;
    resourceType: ResourceType;
    data: T
}

const doc5: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data:{name: 'yoshi'}
}


// tuples
let arr = ['ryu', 25, true];

arr[0] = false
arr[1] = 'yoshi'

let tup:[string, number, boolean] = ['ryu', 25, true]

// won't work because the position is defined=
// tup[0] = 25

// will work
tup.push('hello')