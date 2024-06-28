// singleton
// object.create
// object literals

const mySym = Symbol("key1")

const  JsUser = {
    name: "Ravi",
    "fullname": "Ravi Chaurasiya",
    [mySym]: "mykey1",
    age: 23,
    location: "Noida",
    email: "rp@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]); // ony way to print
// console.log(JsUser[mySym]);

JsUser.email = "rpc@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rpc@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());