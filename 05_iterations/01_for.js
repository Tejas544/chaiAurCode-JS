//for

for(let i = 0; i <= 10; i++) {
  //  console.log(i);
}


for (let index = 0; index < 10; index++) {
    for(let i = 0; i <10; i++) {
        //console.log(`outer${index} and inner${i}`);
        
    }
    
}

let myArr = ["flash" , "batman" , "Superman"];

//console.log(myArr.length);

for(let i = 0; i < myArr.length; i++) {
   //// console.log(myArr[i]);
    
}

// BREAK AND CONTINUE

for(let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log("Detected");
        break;
    }
    console.log(`index is ${i}`);
    
}
for(let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log("Detected");
        continue;
    }
    console.log(`index is ${i}`);
    
}
