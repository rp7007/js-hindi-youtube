// Primitive Data Type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const str = "Ravi";
const str2 = 'Ravi';

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 346436543435436534543n;

// Reference (Non- Primitive) Data Type

// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Ravi",
    age: 21,
}

const myFuncton = function(){
    console.log("Hello World");
}

// console.log(typeof outsideTemp);

console.log(typeof anotherId);

// link to study
// https://262.ecma-international.org/5.1/#sec-11.4.3