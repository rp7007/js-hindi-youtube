function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
}

// sayMyName()


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(3 ,"c") 

// console.log("Result: ", result);

function addTwoNumbers(num1, num2) {
    
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(3 ,6) 

// console.log("Result: ", result);

function loginUserMessage(username = "RP"){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ravi"))
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Ravi",
    price: 199
}

function hadnleObject(anyobject){
    console.log(`username is ${anyobject.username} and prce is ${anyobject.price}`);
}

// hadnleObject(user)
hadnleObject({
    username: "Rp",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 2000]));