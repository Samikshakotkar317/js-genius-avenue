// const tinderUser = new Object() //singletone object
const tinderUser = {} //non dingletone object

tinderUser.id = "123abc" //we can declare data like this also
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname: "kotkar"
        }
    }
}

// accessing the objects

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} - this act as target and act as source

const obj3 = {...obj1, ...obj2}  //sprade operators
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "sam@gmail.com"
    },
    {
        id: 1,
        email: "sam@gmail.com"
    },
    {
        id: 1,
        email: "sam@gmail.com"
    },
    {
        id: 1,
        email: "sam@gmail.com"
    },
] //array inside object
users[1].email //accesing 1st value (it is object) so we can use . (dot)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //its output form in array datatype
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //for chacking this property is exist or not
console.log(tinderUser.hasOwnProperty('isLogged'));