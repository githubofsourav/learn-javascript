let score = "33ab";

let valueInNumber = Number(score);

console.log(valueInNumber); // let score = "3ac" -> Number(score) => NaN(Not a Number)
console.log(typeof valueInNumber);
console.log(typeof(score));

console.log(typeof NaN); // number

/* 
    "33" => 33;
    "33abc" => NaN(Not a Number), but typeof NaN is number;
    true => 1;
    false => 0;
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
    1 => true;  0 => false;
    "" => false
    "sourav" => true
*/

let someNumber = 33;

let stringNumber = String(someNumber);
console.log("stringNumber: " + typeof stringNumber);