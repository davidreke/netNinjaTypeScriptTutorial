var character;
var age;
var isLoggedIn;
age = 25;
isLoggedIn = true;
// ninjas is only an array of strings
var ninjas = [];
ninjas = ['yoshi', 'mario'];
ninjas.push['Shaun'];
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
// this won't work
// mixed.push(false)
var uid;
uid = '123';
uid = 123;
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// this won't work
// ninjaOne = 'hello'
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'Yellow' };
// ***any types***
var newAge = 25;
newAge = '25';
newAge = { name: 'luigi' };
var newMix = [];
newMix.push(5);
newMix.push(false);
// ninja is an object that requireds two properties that can have any type of value
var ninja;
ninja = { name: 25, age: 'yoshi' };
