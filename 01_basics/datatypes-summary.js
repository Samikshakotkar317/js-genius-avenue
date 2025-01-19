// primitive

// 7 typs : string, numbers, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1234562345678456n


// reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "daga"] //arrays
let myObj = {
    name: "samiksha",
    age: 18, //in {} all are objects
}

const myFunction = function(){
    console.log("Hello World");
    
}

// console.log(typeof heros);


// **************************************** memories *******************************************

// Stack (primitive), Heap (Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "samiksha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

