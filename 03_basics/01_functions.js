function addTwoNumber(num1 , num2) {
    return num1 + num2;
}

const result = addTwoNumber(1 , 2);

// console.log(result);


// SO NO NEED to :-> define data type of parameter ,  return type of function 


function writeName(UserName = "Default") {
    // console.log(UserName);
    
}

writeName();  // this will print default
writeName("Tejas");  // and this Tejas

//The problem is when I don't know number of arguments user will provide like in case of total value of cart

// we use Rest operator , same as spread but different use

function totalVal(...num1) {
    return num1;               // Now this will give ARRAY of all the arguments passed
}

// console.log(totalVal(100));

function totalVal2(num1 , num2 , ...num3) {
    return num3;                             // only store values after first two value
} // if we don't pass enough then EMPTY array


// console.log(totalVal2(100 , 200 ));


// HOW to pass OBJECTS :

const user = {
    Name : "Tejas" , 
    Age : 19
}

function objectFun(myObj) {
    console.log(myObj.Name);  // SO i will be handling with parameter name and now it will take only object as parameter   IF OTHER then ******undefined*****
}

objectFun(2)


//same for ARRAYS as OBJECTS