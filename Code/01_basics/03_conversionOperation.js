// let score = "33ab";

// let valueInNumber = Number(score);

// console.log(valueInNumber); // let score = "3ac" -> Number(score) => NaN(Not a Number)
// console.log(typeof valueInNumber);
// console.log(typeof(score));

// console.log(typeof NaN); // number

// /*
//     "33" => 33;
//     "33abc" => NaN(Not a Number), but typeof NaN is number;
//     true => 1;
//     false => 0;
// */

// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// /*
//     1 => true;  0 => false;
//     "" => false
//     "sourav" => true
// */

// let someNumber = 33;

// let stringNumber = String(someNumber);
// console.log("stringNumber: " + typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;

// console.log(negValue); 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello";
// let str2 = " sourav";

// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

/* 
    In JS, conversion begins from left to right, and number gets converted as soon as string is discovered for e.g: 1 + 2 + "2" => 1 + 2 + "2" = 3 + "2" = 32 
*/

let val = (3 + 4) * 5 / 6; // avoid writing confusing code, use ()

// console.log(true); // true
// console.log(+true); // 1

// console.log(+""); // 0


let num1, num2, num3;

num1 = num2 = num3 = 2 + 2 // avoid this

let gameCounter = 100;
gameCounter ++;
console.log(gameCounter); // 101
