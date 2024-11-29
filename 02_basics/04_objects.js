const regUser =  new Object();   //this is a singleton object


const regUser2 = {};  // literal object

regUser.name = "Tejas";

regUser.funllname = {
    UserName : {
        firstName : "Tejas",
        lastName :  "Rajput"
    }
}

const obj1 = {1:"A"  , 2: "B"};
const obj2 = {3:"C" , 4: "D"};

// const obj3 = {obj1 , obj2};   This will create same problem as arrays

const obj3 = Object.assign({} , obj1  , obj2);


const obj4  = {...obj1 , ...obj2}


console.log(obj4);



// console.log(regUser);