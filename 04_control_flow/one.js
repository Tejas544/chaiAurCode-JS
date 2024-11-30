//if

const isUserLoggedIn = true

if(isUserLoggedIn && 2 === "2") {
    console.log("Executed");
    // < , > , <= , >= , == , !=  , ===
}

const balance =1000;

if(balance > 500 ) console.log("Good");  //Implicit scope
//  if(balance > 500 ) console.log("Good")  , console.log("Not so good way of writing");  //Implicit scope

if(balance < 500) {
    console.log("B=Less than 500");
    
}else if( balance < 750) {
    console.log("Less than 750");
    
}else {
    console.log("less than 1000");
    
}


// Also there are && and || for and & or Resp.