// use of typecasting in JS

let score = "33";

console.log(typeof(score))
console.log(typeof score);

let valInNumber = Number(score);

//notice that Number has its N capital

console.log(typeof valInNumber);


//but if score is 33abc then

let score2 = "33abc"

let value = Number(score2);

//now it has type number but if we print it it will show NaN which means Not a Number

//if we have score as null then

let score3 =null

let value3 = Number(score3);

console.log(typeof value3);
console.log(value3);   // this will print 0
// for score = undefined it will print undefined

// "33"  => 33
// "33abc" => NaN
//true => 1

let isLoggedin = 1;

let Boo = Boolean(isLoggedin)

console.log(Boo);

//isLoggedin  = "" => false
//isLoggedin  = "Hitesh" => true

//***********Operations************* */

//console.log(2 + 2)
//console.log(2 * 2)
//console.log(2 - 2)
//console.log(2 ** 2)  // this will print 2 ^ 2

let str1 = "hellp"
let str2 = " hitesh"

let str3 = str1 + str2 //this will add both of them

console.log("1" + 2); //this will give 12
console.log(1 + "2"); //this will give 12
console.log(1 + 2 + "2");  //this will give 32
console.log("1" + 2 + 2);  //this will give 122

console.log(+true);  // 1
console.log(+""); // 0

