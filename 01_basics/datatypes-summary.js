// Depending on how the data is stored in memory and accessed there are 2 types of datatypes Primitive and Non-Primitive

// *********** Primitive types *********** //

// Primitive types have are 7 categories and is Call by Value method

/* Seven primitive data types:
---------------------------
1. "number" - for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2. "bigint" - for integer numbers of arbitrary length.
3. "string" - for strings. A string may have zero or more characters, there’s no separate single-character type.
4."boolean"- for true/false.
5. "nul"l - for unknown values – a standalone type that has a single value null.
6. "undefined" - for unassigned values – a standalone type that has a single value undefined.
7. "symbol" - for unique identifiers

Call by Value: In this method, values of actual parameters are "copied" to the function's formal parameters, and the two types of parameters are stored in different memory locations. So any changes made inside functions are not reflected in the actual parameters of the caller. */

// By value (primitives)
let a = 5;
let b;
b = a;
a = 3;
console.log(a); // Output of a is = 3
console.log(b); // Output of b is = 5 

const dataNumber = 100
const dataString = "Video game"

const isLoggedIn = false
const dataNull = null
let dataUndefined;

const id = Symbol('123')
const dataSymbol = Symbol('123')

console.log(id === dataSymbol);

const bigNumber = 3456543576654356754n


// *********** Non Primitive or Reference types *********** //

// Array, Objects, Functions

const dataArray = ["shaktiman", "naagraj", "doga"];
// Object is any Key:value pair within curly braces
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.table([typeof dataNumber, typeof dataString, typeof isLoggedIn, typeof dataNull, typeof dataUndefined, typeof dataSymbol, typeof bigNumber, typeof dataArray, typeof myObj, typeof myFunction])

// https://262.ecma-international.org/5.1/#sec-11.4.3