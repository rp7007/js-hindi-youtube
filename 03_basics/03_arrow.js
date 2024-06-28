const user = {
    username: "Ravi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "ravi"
//     console.log(this);
// }

// chai()


// function chai() {
//     let username = "ravi"
//     console.log(this.username);
// }

// chai()


// const chai = () => {
//     let username = "ravi"
//     console.log(this);
// }

// chai()



// ++++++++++++++++++++++++++++++Arrow Functions+++++++++++++++
// method 1 / explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// method 2 / implicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = () => {username: "ravi"}   // it will return undefined
console.log(addTwo());
const addTwo1 = () => ({username: "ravi"}) // it will return the correct value
console.log(addTwo1());


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
