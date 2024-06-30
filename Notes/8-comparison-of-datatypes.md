```javascript
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
```


* The reason for above:
    - equity check `==` and comparsions `>` `<` `>=` and `<=` work differently.
    - comparsions convert null to a number, treating it as 0.
    - Thus, null >= 0 is true and null > 0 is false as 0 > 0 is false.

* On the other hand, for `null == 0`
    - equity check `==` for **undefined** and **null** is defined such that, without any conversions, *they are equal to only eachother and not equal to anything else.* 
    - Thus, null == 0 is false.

* null is treated in a special way by the Equals Operator(==).
    - In breif, it only coerces to undefined:
        null == null // true
        null == undefined // true
        value such as false, "", '0', [] are subject to numeric type coercion, all of them coerce to zero.