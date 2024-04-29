"use strict"; // This is mentioned for the browser engine to inform, treat all JS code as newer version

// alert(3 + 3) won't work because we are using nodejs and not browser

console.log(3 
+ 
3) //code readability should be high

// https://tc39.es/ecma262/#sec-ecmascript-language-types-null-type (documentation for JS standards)



let name = "string datatype because of double quotes" // String data type
let age = 10 // Number data type
let isLoggedin = true // Boolean data type true/false
let state; // value will be undefined

// Premitive data types
// number => 2 to power 53 is the number range
// bigint => if the number value is more than the defined range
// string => can be '' or "" preferable will be double quotes
// null => standalone value. The Null type has exactly one value, called null. null type is an object
// undefined => any variable that has not been assigned a value has the value undefined.
// symbol => primitive value that represents a unique, non string object. Eg; to define unique component in figma, react etc

//object

console.log("Type of null is:", typeof null) // typeof null is object
console.log("Type of undefined is:", typeof undefined) // typeof undefined is undefined
