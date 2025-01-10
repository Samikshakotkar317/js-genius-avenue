const accountId  = 144553
let accountEmail = "sam31@gmail.com"
var accountPassword = "12345"
accountCity =  "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hcrt21@gmail.com"
accountPassword = "121212"
accountCity = "pune"

console.log(accountId);

/*
prefer not to use var
because of issue in black scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
