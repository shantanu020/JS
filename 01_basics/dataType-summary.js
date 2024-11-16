//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Shantanu",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof null); //object
// console.log(typeof bigNumber); //bigint
// console.log(typeof myObj); //object
// console.log(typeof myFunction); //function
// console.log(typeof anotherId); //Symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory concept
// Stack (Primitive), Heap (Non-Primitive)

//primitive (copy)

let myName = "shantanu"
let anotherName = myName
// console.log(anotherName);
anotherName="chai"
// console.log(myName);
// console.log(anotherName);


//Non-primitive (reference)

let user={
    email:"useremail@gmail.com",
    age:19,
}
let anotherUser=user;
// console.log(anotherUser.email);
anotherUser.email="anotheruseremail@gmail.com"
// console.log(user.email);
// console.log(anotherUser.email);