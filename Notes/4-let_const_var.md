# Let, const and var ki kahani
- `var`, `let` and `const` are reserved keywords in javascript.

### `var`
- **Function Scope**: `var` is function-scoped, meaning it is accessible within the function in which it is defined.
- **Re-declaration**: Can be re-declared within the same scope, which can lead to unexpected behaviors.
- **Hoisting**: `var` is hoisted to the top of its scope (global or function) and is initialized with `undefined`. This can lead to undefined values if accessed before assignment.
- **Use Case**: Historically used for all variable declarations before ES6. Now, generally avoided in favor of `let` and `const` due to their more predictable scoping rules.

### `let`
- **Block Scope**: `let` is block-scoped, meaning it is only accessible within the block (e.g., `{}`) in which it is defined.
- **Re-declaration**: Cannot be re-declared within the same scope, preventing accidental re-declarations.
- **Hoisting**: `let` is hoisted to the top of the block but is not initialized. Accessing it before declaration results in a `ReferenceError`.
- **Use Case**: Preferred for variables that will change value and should be confined to a specific block scope, such as within loops or conditional statements.

### Comparison `let` vs `var`
- **Scope**: `let` is block-scoped while `var` is function-scoped.
- **Re-declaration**: `let` cannot be re-declared in the same scope, whereas `var` can be.
- **Hoisting**: Both `let` and `var` are hoisted, but `let` does not allow access before initialization (temporal dead zone), while `var` does (initialized as `undefined`).

### `const`
- **Block Scope**: `const` is block-scoped, similar to `let`, meaning it is only accessible within the block in which it is defined.
- **Immutability**: Variables declared with `const` cannot be reassigned. However, the contents of objects and arrays declared with `const` can still be modified.
- **Re-declaration**: Cannot be re-declared within the same scope, providing safety against accidental re-declarations.
- **Hoisting**: `const` is hoisted to the top of the block but is not initialized. Accessing it before declaration results in a `ReferenceError`.
- **Use Case**: Preferred for variables that should remain constant and not be reassigned, such as configuration settings, constants, or values that should not change throughout the program's execution.