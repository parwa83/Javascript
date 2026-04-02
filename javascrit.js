// String assignment
w = "Man!";                  // variable 'w' stores a string
console.log(w);              // prints: Man!
console.log(typeof(w));      // type is string


// Dynamic typing example
let x = "123";               // x is string initially
console.log(x);              // prints: 123
console.log(typeof(x));      // type: string

x = 123;                     // now x is reassigned as number
console.log(x);              // prints: 123
console.log(typeof(x));      // type: number


// Primitive copy (value copy)
let l = "Educo";             // l stores string
let y = l;                   // y gets COPY of value

l = "Ureka";                 // changing l does NOT affect y
console.log(l);              // prints: Ureka
console.log(y);              // prints: Educo


//Refrence Types Objects, Arrays, Functions

// Object copy (reference copy)
let p = { name: "Parwa" };   // object stored in memory
let m = p;                   // m points to SAME object

p.name = "Iodika";           // modifying object via p
console.log(p);              // { name: "Iodika" }
console.log(m);              // ALSO { name: "Iodika" }


//Arrays
let courses=['SD','C++','ML','AI',123,1.98];
console.log(courses[4]);

//Functions
function createcourse(coursename)
{
    console.log('creating '+coursename);
}

createcourse('AI');
createcourse('GenAI');

// Execution Context = environment where JS code runs

// Example:
let a = 10;

function test() {
  let b = 20;
  console.log(a + b);
}

test();
//GEC : Global Execution Face
// 1. Memory Phase (Creation Phase)
// a → undefined
// test → function definition stored

// 2. Code Phase (Execution Phase)
// a = 10 assigned
// test() executed → new execution context created


// Hoisting = moving declarations to top (memory phase) or intializing variale without declaration

// var example
console.log(h);   // undefined (not error)
var h= 5;

// Internally:
// var h;  (hoisted)
// console.log(h); → undefined
// h = 5;


//TDZ = the time where a variable exists but you are not allowed to use it yet.
//TDZ is the “no-access zone” before a variable is initialized.

// var → function scoped
var h = 10;

// let → block scoped
let o = 20;

// const → block scoped + cannot reassign
const j = 30;

{
  var f = 1;
  let t = 2;
}

console.log(f); //  works
// console.log(t); //  error

let s = 5;
s = 10; //  allowed

const r = 5;
// r = 10; //  error

function hello()
{
    let x= 10;
    console.log(x);
}
console.log(x); //access global x
hello();  //access local blocked scope x


// Lexical Scope = scope decided by where code is written

let v = 10;

function outer() {
  let b = 20;

  function inner() {
    console.log(v); // from global
    console.log(b); // from outer
  }

  inner();
}

outer();

// 1. Assign function to variable
let greet = function() {
  console.log("Hello");
};

greet(); // works


// 2. Pass function as argument
function execute(fn) {
  fn();
}

execute(greet);


// 3. Return function from another function
function outer() {
  return function() {
    console.log("Returned function");
  };
}

let result = outer();
result();

// Takes function as input
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(2, 3, add)); // 5


// Returns function
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

let double = multiplier(2);
console.log(double(5)); // 10


function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

// Lexical Scope → access rules

// First-class → functions are values

// Higher-order → functions using functions

// Closure → function + remembered scope

// Closures in JavaScript are created when a function retains access to variables from its lexical 
// scope even after the outer function has finished execution, enabled by JavaScript’s support for first-class 
// and higher-order functions.

// Javascript is a Single-threaded synchronous.
//Single-threaded synchronous = one task at a time, executed in order, blocking the next task until current finishes



//Callback in Asynchronous
//A callback is a function passed as an argument to another function and executed later(or when needed).
//Callbacks allow JavaScript to handle tasks without blocking execution.
console.log("Start");

// setTimeout is async → does not block execution
setTimeout(function() {
  console.log("Callback executed after 2 sec");
}, 2000);

console.log("End");



// Callback Hell is when callbacks are nested inside callbacks repeatedly, making code hard to read, debug, and maintain.
// Example of Callback Hell

setTimeout(function() {
  console.log("Step 1");

  setTimeout(function() {
    console.log("Step 2");

    setTimeout(function() {
      console.log("Step 3");

      setTimeout(function() {
        console.log("Step 4");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

//Callback hell, also known as the pyramid of doom, refers to deeply nested callback functions that make 
// code difficult to read, maintain, and debug, typically occurring in asynchronous JavaScript code.

//Promises
//A Promise is an object that represents the future result of an async operation.
//Pending → initial state
// Fulfilled → success (resolve)
// Rejected → failure (reject)
// Promise: represents future result of async operation

console.log("Start");

// Create Promise
let promise = new Promise(function(resolve, reject) {

  let success = true; // change to false to test reject

  setTimeout(function() {
    if (success) {
      resolve("Step 1 done");   // success
    } else {
      reject("Error occurred"); // failure
    }
  }, 1000);

});

// Consume Promise
promise
  .then(function(result) {
    console.log(result);        // Step 1 done
    return "Step 2 done";       // passing to next then
  })
  .then(function(result) {
    console.log(result);        // Step 2 done
    return "Step 3 done";
  })
  .then(function(result) {
    console.log(result);        // Step 3 done
  })
  .catch(function(error) {
    console.log(error);         // handles any error
  })
  .finally(function() {
    console.log("Finished");    // always runs
  });

console.log("End");



//Higher-Order Function
//A function that takes another function as input OR returns a function
// map returns a NEW array after applying function

let nums = [1, 2, 3];

let doubled = nums.map(function(n) {
  return n * 2;
});

console.log(doubled); // [2, 4, 6]

// filter returns elements that satisfy condition

let bnums = [1, 2, 3, 4];

let even = nums.filter(function(n) {
  return n % 2 === 0;
});

console.log(even); // [2, 4]


// reduce combines array into one value

let cnums = [1, 2, 3, 4];

let sum = nums.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(sum); // 10
