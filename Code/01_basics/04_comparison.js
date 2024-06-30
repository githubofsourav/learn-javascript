// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // true "2" ---convert to number 2---> 2 > 1 
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true, null is greater than 0 
***********************


// strict check ===

console.log("2" == 2); // true, string to number and then comparison
console.log("2" === 2); // false, as type is checked & no type conversion