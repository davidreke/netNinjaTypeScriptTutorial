"use strict";
let character;
let age;
let isLoggedIn;
age = 25;
isLoggedIn = true;
// ninjas is only an array of strings
let ninjas = [];
ninjas = ['yoshi', 'mario'];
ninjas.push('Shaun');
// union types
let mixed = [];
mixed.push('hello');
mixed.push(20);
// this won't work
// mixed.push(false)
let uid;
uid = '123';
uid = 123;
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// this won't work
// ninjaOne = 'hello'
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'Yellow' };
// ***any types***
let newAge = 25;
newAge = '25';
newAge = { name: 'luigi' };
let newMix = [];
newMix.push(5);
newMix.push(false);
// ninja is an object that requireds two properties that can have any type of value
let ninja;
ninja = { name: 25, age: 'yoshi' };
// functions in TS
let greet;
greet = () => {
    console.log('hello world');
};
greet = () => {
    console.log('hello again');
};
// a function with void at the end is a function taht doesn't have a return
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '2w');
// you can put a return type after the parenthesis
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
