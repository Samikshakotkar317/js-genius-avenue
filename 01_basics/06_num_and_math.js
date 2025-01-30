const score = 400
// console.log(score);


const balance = new Number(100) //new is a keyword // specially defining a number
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8766
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3)); //for top value choosing=>5
// console.log(Math.floor(4.9)); //choose less velaue =>4
// console.log(Math.min(4, 3, 6, 8)); // for minimum value
// console.log(Math.max(4, 3, 6, 8)); // for finding maximum value

// console.log(Math.random()); //values only between 0 to 1
console.log((Math.random()*10) + 1); //for avoiding 0 value like 0.0534 =>0 add 1
console.log(Math.floor(Math.random()*10) + 1); //roundoff smallest value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) // for grater then 10 value add min