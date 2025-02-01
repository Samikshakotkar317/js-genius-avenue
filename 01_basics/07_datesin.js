// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 25) //in js months are start with 0
// let myCreatedDate = new Date(2025, 0, 25, 5, 3)
// let myCreatedDate = new Date("2025-01-14") //if we write date dd-mm then start with 01
let myCreatedDate = new Date("01-14-2025") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // calculating time in seconds

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCDate());
// console.log(newDate.getUTCDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ''
})
