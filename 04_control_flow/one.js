// if
// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 40){
//     console.log("less than 50");
// } else {
// console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");  // not a good practice

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");    
// } else if(balance < 950){
//     console.log("less than 950");
// } else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2=="2"){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}