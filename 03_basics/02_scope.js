//var name1 = "Tejas";
let name2 = "Sushil";
const name3 = "Rajput";

// Now problem is that we can redefine var here as well

//which is problamatic               BUT not for LET , we can redefine it but not redeclare it in the same scope


if(true) {
    let name1 = "Tejas"
    const name2 ="Hitesh"
    console.log(name1);
    
}

let name1 = "Tej"

console.log(name1);

// This means andar ke bahar nhi aate so can be redeclared

let obj1 = {
    name1 : "Tejas",
    obj2 : {
        name1 : "Tej"
    }
}

// Simple si baat hai chhote bado se kuch mang sakte hai but not vice versa jaise ki 

function one() {
    let UserName = "Tejas"

    function two() {
        const website = "YT"
        console.log(UserName);             // so now this is allowd ki chhota bade se UserName maang raha hai
                                           // but not vice versa
        
    }
}

const fun1 = function One() {
    const n = "Tejas";                       // also a type to define function
}

// but there is aproblem with this kind of function that we cannot call them before defining
// That means the other type can be called before defining


