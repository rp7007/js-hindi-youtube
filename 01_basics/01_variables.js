const accountId = 134567
let accountEmail = "rp@google.com"
var accountPassword = "12345"
accountCity = "SantKabirNagar"

let accountState;

// accountId = 2 // not allowed

accountEmail = "rr@pc.com"
accountPassword = "3243567"
accountCity = "Gorakhpur"

console.log(accountId)

/* 
var is not preferred to be used
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])