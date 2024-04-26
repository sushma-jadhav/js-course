let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true


console.log("Type of score is:", typeof score) // or
// console.log("Type of score in method format is:", typeof (score)) // typeof in method format

let scoreNumber = Number(score2)
console.log("Type of score2 (string) is converted to number:", typeof scoreNumber)
console.log("But the value of score2 is NaN:", scoreNumber)

let scoreNumber1 = Number(score3)
console.log("Type of score3 null value is converted to number:", typeof scoreNumber1)
console.log("But the value of score3 null is 0:", scoreNumber1)

let scoreNumber2 = Number(score4)
console.log("Type of score4 undefined value is converted to number:", typeof scoreNumber2)
console.log("But the value of score4 undefined is NaN:", scoreNumber2)

let scoreNumber3 = Number(score5)
console.log("Type of score5 boolean value is converted to number:", typeof scoreNumber3)
console.log("But the value of score5 boolean true is 1:", scoreNumber3)

/* ********* Converted to Number ****** */
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let booleanNo = 1
let booleanNo1 = ""
let booleanNo2 ="string"

let isBooleanNo = Boolean(booleanNo)
console.log(isBooleanNo)

let isBooleanNo1 = Boolean(booleanNo1)
console.log(isBooleanNo1)

let isBooleanNo2 = Boolean(booleanNo2)
console.log(isBooleanNo2)


/* **** Converted to Boolean ***** */
// 1 => true; 0 => false
// "" => false
// "string" => true

/* ******* Coverted to String ****** */
let number = 33

let numberToString = String(number)
console.log(typeof numberToString);

// ******************************************* Operations ********************************************* //

let value = 3
let negValue = -value
// console.log(negValue);

/* Arthimetic Operations */

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(3**3) 3 power 3
//  console.log(2%3)
// console.log(2/2)

// console.log(1 + "2") number + string
// console.log("1" + 2) string + number
// console.log("1" + 2 + 3) if first number is string then all the following numbers is treated as string
// console.log(1 + 2 + "3") 

// console.log( (3 + 2) * 4 + 3); paranthesis is calculated first

// console.log(+true) 

/* *** precedence operator Prefix and Postfix*/
let gameCounter = 100
console.log(gameCounter++)
console.log(++gameCounter)