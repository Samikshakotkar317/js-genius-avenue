const name = "samiksha"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // follow this syntax //string interpolution 

const gameName = new String('samiksha-hc') //new keyword objecct

// console.log(gameName[0]); //accesing key value
// console.log(gameName.__proto__); //acceesing prototype

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //character position
// console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4) //we can give -ve value in slice
// console.log(anotherString);

const newStringOne = "  samiksha  "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim use tu removing space

const url = "https://samiksha.com/samiksha%20kotkar"

// console.log(url);
console.log(url.replace('%20', '-')) //replace %20 to '-'

console.log(url.includes('samiksha')) //keyword are present in url or not

console.log(gameName.split('-')); // split karne ke liye



