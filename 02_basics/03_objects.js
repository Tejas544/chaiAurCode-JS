// singleton//matlab yeh apne tarike ka ek hi object hai
// When we declare as literals it wont be singleton

// Object.create      // yeh hai constructor wala tarika

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                 //TO USE SQUARE BRACKET IS MANDATORY
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)              //THIS IS NOT A GOOD WAY  
// console.log(JsUser["email"])             // THIS IS RECOMMENDED
// console.log(JsUser["full name"])       // THE FIRST ONE CANNOT BE USED FOR THIS TYPE 
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//Distructuring :::: -l
const {isLoggedIn : Log} = JsUser;  //Now i can access isLoggedin by Log only 

// console.log(Log);


