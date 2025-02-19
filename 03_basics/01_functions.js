// console.log("S");
// console.log("A");
// console.log("M");
// console.log("M");
// console.log("Y");

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("M");
    console.log("Y");
}

// function referance => sayMyName
// function exucution =>  sayMyName() //for argument and no in() like (4, 3)

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }  //(number1, nomber2) these are parameters

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("sammy"); //function property - once we write return after that no value execute value does on print
    
    return number1 + number2
    
}

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4") //both act as string and give output 34

const result = addTwoNumbers(3, 4)

// console.log("result:", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    if(!username){
        console.log("Please enter a username");
        return 
    } //value chack in between () and code execute in {} // ! convert true to false and false to true 
    return`${username} just logged in`
}  //using $ sign we write variable name

// console.log(loginUserMessage("sammy"));//executing value
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1){
//     return num1
// } //...num1 means rest it give output in array

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 700));

const user = {
    username: "sammy",
    price: 199
    // prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sammy",
    price: 399
}) //this is for object

//for array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//2nd method
console.log(returnSecondValue([200, 400, 100, 600]));