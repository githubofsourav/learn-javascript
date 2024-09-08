// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // if not declared, then let value is assigned undefined

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); // false, as symbols are always unique as they return unique symbol value for each variable

// const bigNumber1 = BigInt("1111111111");
const bigNumber2 = 12345678901235221111111111111n;

// console.log(bigNumber2);

// Non-primitive (Reference): Given along with memory address and not just the value.

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

const myUserObject = {
    name: "sourav",
    age: 24
}

const myFunction = function() {
    console.log("Hello world");
}

const test = function(n) {

    return function(...args) {
        return n++;
    }
}

const val = test(10);
console.log(val());
console.log(val());
console.log(val());