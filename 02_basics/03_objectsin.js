//singleton  only construct se singleton banta hai

// Object.create //constructer method

// object literals

const mySym = Symbol("key1") //symbol

const JsUser = {
    name: "Samiksha",
    "full name": "Samiksha Kotkar", // it is not get access by . i mean 1st method because it is in string form
    // mySym: "mykey1", //it dosent use as a symbol it show as a string
    [mySym]: "mykey1", //adding a symbol
    age: 18,
    location: "Sangamner",
    email: "sam321@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); //how to acces
// console.log(JsUser["email"]); // give as string other wise it says email is not defined
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "sam31@chatgpt.com" //for changing values
// Object.freeze(JsUser) //for unchanging or freeze th value
// JsUser.email = "sam31@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpulation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
