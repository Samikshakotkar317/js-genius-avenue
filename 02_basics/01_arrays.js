// array it is a object

// () = paranthesis {} = bracess [] = bracket 
//in array we use [] and inside that is elements

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["elon_musk", "suyash"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[4]); //start with 0

// Array methods

// myArr.push(6) //adding a value in main array
// myArr.push(7)
// myArr.pop() //removing last value

// myArr.unshift(8) // adding a number in starting
// myArr.shift() //remove unshifting starting no or 1st no

// console.log(myArr.includes(9)); //we ask questions
// console.log(myArr.indexOf(3)); // if there no is not exist then give -1 if exist then give that index

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // print without array
// console.log(typeof newArr); //array convert into string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // excluding last no

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //
console.log("C ", myArr); //in array print values that other then we write in slice mean ("remove splice portion in main array")
console.log(myn2);
