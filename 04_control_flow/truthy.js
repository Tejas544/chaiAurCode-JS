const userEmail = "h@hitesh.ai";

if(userEmail) {
    console.log("Got Email");
    
}else{
    console.log("No User Email found");
    
}

// Falsy Values

// False  , 0 , -0 , BigInt 0n ,  "" , null , undefined  , NaN

//all other are truthy

// "0" ,  'false' , " " , ,[] , {} , function(){} 


const empObj = {};

if((Object.keys(empObj).length === 0)) {
    console.log("Object is empty");
}

// Nullish Coalescing operator  (??) : Null Undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;



console.log(val1);


//ternary operator

// condition ? true : false