//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*
javascript is a dynamic programming types.

Primitive datatypes:(call by value)
String - string
Number - number
Boolean - Boolean
Null - object(****)
Undefined - undefined
BigInt - bigint

Non-primitive datatypes:(call by reference)
Array - object
Function - function(object)
Object - object

// https://262.ecma-international.org/5.1/#sec-11.4.3

*/

// stack memory(primitive dataType) and Heap Memory(Non-Primitive DataTypes)

// stack memory(primitive dataType)
let name1="Ranjan Yadav"
let name2= name1

name1="Nepal"

console.log(name1)

//Heap Memory(Non-Primitive DataTypes)

let userOne={
    email:"ranjan@gmail.com",
}

let userTwo = userOne

userTwo.email= "yadav@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)