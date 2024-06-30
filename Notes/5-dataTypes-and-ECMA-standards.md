### 1. **Number**
- **Description**: Represents both integer and floating-point numbers.
- **Operations**: Supports arithmetic operations like addition, subtraction, multiplication, and division.
- **Example**:
  ```javascript
  let integer = 42;
  let float = 3.14;
  ```

### 2. **String**
- **Description**: Represents a sequence of characters used for textual data.
- **Operations**: Can be concatenated using the `+` operator or template literals.
- **Example**:
  ```javascript
  let name = "John";
  let greeting = `Hello, ${name}!`;
  ```

### 3. **Boolean**
- **Description**: Represents logical entities with two values: `true` and `false`.
- **Usage**: Commonly used in conditional statements.
- **Example**:
  ```javascript
  let isActive = true;
  let isAvailable = false;
  ```

### 4. **Null**
- **Description**: Represents the intentional absence of any object value.
- **Special Case**: `null` is a primitive value and is treated as falsy in boolean contexts.
- **Example**:
  ```javascript
  let emptyValue = null;
  ```

### 5. **Undefined**
- **Description**: Indicates that a variable has been declared but has not yet been assigned a value.
- **Default**: Variables that are declared but not initialized are assigned `undefined`.
- **Example**:
  ```javascript
  let uninitialized;
  console.log(uninitialized); // undefined
  ```

### 6. **Object**
- **Description**: Collections of properties, where each property is a key-value pair.
- **Use Case**: Useful for storing related data and functionalities.
- **Example**:
  ```javascript
  let person = {
    name: "Alice",
    age: 30
  };
  ```

### 7. **Array (Special type of Object)**
- **Description**: Ordered collection of elements, typically of the same type.
- **Access**: Elements are accessed via indices starting from 0.
- **Example**:
  ```javascript
  let fruits = ["Apple", "Banana", "Cherry"];
  ```

### 8. **Function (Special type of Object)**
- **Description**: Block of code designed to perform a particular task.
- **Invocation**: Functions can be invoked, and they can return a value.
- **Example**:
  ```javascript
  function add(a, b) {
    return a + b;
  }
  let sum = add(2, 3);
  ```

### 9. **Symbol**
- **Description**: A `Symbol` is a unique and immutable data type introduced in ES6.
- **Uniqueness**: Every `Symbol` value is unique, even if created with the same description.
- **Use Case**: Useful for creating unique property keys in objects to avoid property name collisions.
- **Creation**: Created using the `Symbol()` function, which can take an optional description for debugging purposes.
- **Non-enumerable**: Symbols are not included in `for...in` loops and are not enumerable, making them suitable for defining internal object properties.
- **Example**:
  ```javascript
  let uniqueID = Symbol('id');
  let user = {
    name: "John",
    [uniqueID]: 12345
  };
  console.log(user[uniqueID]); // 12345

  // Unique symbols
  let sym1 = Symbol('description');
  let sym2 = Symbol('description');
  console.log(sym1 === sym2); // false
  ```

### 10. **BigInt**
- **Description**: A `BigInt` is a special numeric type that can represent integers with arbitrary precision, introduced in ES11 (ECMAScript 2020).
- **Usage**: Useful for working with very large integers that are beyond the safe integer limit of the `Number` type (`2^53 - 1`).
- **Operations**: Supports standard arithmetic operations, but cannot be mixed with `Number` types without explicit conversion.
- **Creation**: Created by appending `n` to an integer literal or using the `BigInt()` constructor.
- **Example**:
  ```javascript
  let bigNumber = 1234567890123456789012345678901234567890n;
  let anotherBigNumber = BigInt("1234567890123456789012345678901234567890");

  // Arithmetic operations
  let sum = bigNumber + anotherBigNumber;
  let product = bigNumber * anotherBigNumber;

  console.log(sum); // 2469135780246913578024691357802469135780n
  console.log(product); // 1524157875323883675049535156252101342731346982448754374597767375581489959470n

  // Mixing with Number (throws an error)
  let num = 42;
  // console.log(bigNumber + num); // TypeError: Cannot mix BigInt and other types
  ```

### Additional Points for Symbol
- **Global Symbols**: The `Symbol.for(key)` method creates or retrieves a symbol from the global symbol registry, allowing shared symbols across different parts of an application.
- **Symbol Properties**: Commonly used to define non-string properties that won't conflict with other properties, such as `Symbol.iterator` for defining custom iterators.

### Additional Points for BigInt
- **Comparison**: BigInt values can be compared using standard comparison operators like `===`, `>`, `<`.
- **Limitations**: Some methods and properties, like `Math` object methods, do not support `BigInt` and will throw errors if used.
- **Performance**: Operations on `BigInt` may be slower compared to regular `Number` types due to the complexity of handling arbitrary precision.

These additional points highlight the unique properties and use cases for `Symbol` and `BigInt` in JavaScript, providing a deeper understanding of their roles and functionalities.