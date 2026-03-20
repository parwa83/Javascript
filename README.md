# JavaScript Fundamentals – Learning Summary

## Overview

This document summarizes the basic JavaScript concepts I have learned. It covers variables, data types, scope, execution context, callbacks, promises, and higher-order functions.

---

## 1. Variables and Data Types

JavaScript is dynamically typed, which means a variable can store different types of values.

```javascript
let x = "123"; // string
x = 123;       // number
```

The `typeof` operator is used to check the type of a variable.

---

## 2. Primitive vs Reference Types

### Primitive Types (Value Copy)

Primitive values are copied by value.

```javascript
let a = "Educo";
let b = a;
a = "Ureka";
// b is still "Educo"
```

### Reference Types (Shared Reference)

Objects, arrays, and functions are copied by reference.

```javascript
let obj1 = { name: "Parwa" };
let obj2 = obj1;
obj1.name = "Iodika";
// obj2 is also updated
```

---

## 3. Arrays and Functions

Arrays store multiple values.

```javascript
let courses = ['SD','C++','ML','AI',123];
console.log(courses[4]);
```

Functions are reusable blocks of code.

```javascript
function createCourse(name) {
  console.log("creating " + name);
}
```

---

## 4. Execution Context

JavaScript runs code inside an execution context.

There are two phases:

* Memory phase (variables and functions are stored)
* Execution phase (code is executed line by line)

```javascript
let a = 10;
function test() {
  let b = 20;
  console.log(a + b);
}
```

---

## 5. Hoisting

Hoisting means variables and functions are moved to the top of their scope during the memory phase.

```javascript
console.log(x); // undefined
var x = 5;
```

`var` is initialized with `undefined`, but `let` and `const` are not.

---

## 6. Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the time between variable creation and initialization.

```javascript
console.log(a); // ReferenceError
let a = 5;
```

During this time, the variable cannot be accessed.

---

## 7. Scope (Block vs Function)

* `var` is function-scoped
* `let` and `const` are block-scoped

```javascript
{
  var a = 1;
  let b = 2;
}
console.log(a); // works
// console.log(b); // error
```

---

## 8. Lexical Scope

A function can access variables from its outer scope.

```javascript
let a = 10;

function outer() {
  let b = 20;
  function inner() {
    console.log(a, b);
  }
  inner();
}
```

---

## 9. Variable Shadowing

An inner variable with the same name hides the outer variable.

```javascript
let x = 100;

function test() {
  let x = 50;
  console.log(x); // 50
}
```

---

## 10. Callbacks

A callback is a function passed into another function.

```javascript
function greet(name) {
  console.log("Hello " + name);
}

function process(callback) {
  callback("Parwa");
}
```

---

## 11. Callback Hell

When callbacks are nested deeply, the code becomes hard to read and manage.

```javascript
task1(function() {
  task2(function() {
    task3(function() {});
  });
});
```

---

## 12. Promises

Promises are used to handle asynchronous operations.

```javascript
let promise = new Promise((resolve, reject) => {
  resolve("Done");
});

promise.then(res => console.log(res));
```

States:

* Pending
* Fulfilled
* Rejected

---

## 13. Higher-Order Functions

Functions that take other functions as arguments or return functions.

```javascript
arr.map(x => x * 2);
arr.filter(x => x % 2 === 0);
arr.reduce((acc, x) => acc + x, 0);
```

---

## 14. Closures

A closure is a function that remembers variables from its outer scope.

```javascript
function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
```

---

## 15. Single-Threaded and Synchronous Nature

JavaScript runs one task at a time in order. It uses mechanisms like the event loop to handle asynchronous operations.

---

## Key Points

* JavaScript is dynamically typed
* `let` and `const` are safer than `var`
* Scope and hoisting are important concepts
* Closures, callbacks, and promises are used in asynchronous programming
* Higher-order functions simplify data handling

---

## Summary

JavaScript runs code using execution contexts and follows lexical scoping. It supports functions as values and handles asynchronous operations using callbacks and promises.

---

## Next Steps

* Learn async/await
* Understand the event loop
* Practice DOM manipulation
* Explore backend development using Node.js

---
