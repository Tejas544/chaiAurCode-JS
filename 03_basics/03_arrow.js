// this is used for defining context

const user = {
    UserName : "Tejas",
    price : 999,

    welcomeMessage : function print() {
        console.log(`${this.UserName} , Welcome to website`)   
        console.log(this);                                     // this will print complete current context that is the complete object at that time

    }

    
}

//user.welcomeMessage();  //tejas welcome to website

user.UserName = "Hitesh"
//user.welcomeMessage();  //Hitesh welcome to website


//console.log(this)   // this willprint {}  but in browser windows object will get printed

// Now what happen if we use this in Function LET's SEE


function fun1() {
   // console.log(this);     // this this will print lot of info here as well
                           // but if I define USername and then use this.userName it will not work

    let UserName = "Tejas"
    //console.log(this.UserName)  // Undefined
}
//fun1()

//same will happen with const type function

// const fun2 = function fun3() {
//     let UserName = "Tejas"
//     //console.log(this.UserName);  // undefined
    
// }
// fun2();

// ******ARROW FUNCTION************

const arrFun = () => {       //can't use this.userName here as well BUT>>>>>> ->
    //  console.log(this);        // this will print empty Object {}
}


const addTwo = (num1 , num2) => num1 + num2  //this is also fine so it will return num1 + num2 
const addThree = (num1 , num2 , num3) => (num1 +num2 +num3) //this is also fine so it will return num1 + num2 

console.log(addTwo(3 , 4)); 
