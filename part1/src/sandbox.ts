let character: string;
let age: number;
let isLoggedIn: boolean;

age = 25

isLoggedIn = true

// ninjas is only an array of strings
let ninjas: string[] = [];

ninjas = ['yoshi', 'mario']

ninjas.push('Shaun')

// union types
let mixed: (string|number)[] = []

mixed.push('hello')
mixed.push(20)
// this won't work
// mixed.push(false)

let uid: string|number
uid = '123'
uid = 123

let ninjaOne: object

ninjaOne = {name: 'yoshi', age:30}

// this won't work
// ninjaOne = 'hello'

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {name: 'mario', age: 20, beltColor: 'Yellow'}



// ***any types***

let newAge: any = 25;

newAge = '25'

newAge ={name: 'luigi' }

let newMix : any[] = []

newMix.push(5)
newMix.push(false)

// ninja is an object that requireds two properties that can have any type of value
let ninja: {name: any, age: any}

ninja={name: 25, age: 'yoshi'}


// functions in TS

let greet: Function;

 greet = () => {
    console.log('hello world')
}

greet = () => {
    console.log('hello again')
}


// a function with void at the end is a function taht doesn't have a return
const add = (a: number, b: number, c: number | string = 10): void =>{
    console.log(a+b)
    console.log(c)
}

add(5,10, '2w')

// you can put a return type after the parenthesis
const minus = (a: number, b: number ):number =>{
    return a + b
}

let result = minus(10,7)

// this won't work because TS infers the type of result
// result = 'hello'


// we can make our own type aliases to reuse

type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

// *** Function Signatures ***
// let greet2: Function;

// example 1
let greet2: (a:string, b:string) => void;
// ^a and b don't need to be the names of the arguments, they just label the types, and we could changes a and b to anything

greet2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a:number, b:number, c:string) => number

calc = (num1:number, num2: number, action:string)=>{
    if (action === 'add'){
        return num1 + num2
    } else {
        return num1 - num2
        // we must have an else statement or else TS will give an  error because the function will not always return a number
    }
}

let logDetails2: (obj: {name: string, age: number})=> void

type person3 = {name: string, age: number}

logDetails2 = (ninja: person3) =>{
    console.log(`${ninja.name} is ${ninja.age} years old`)
}