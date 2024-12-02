const coding= ["java" , "cpp" , "ruby" , "python" , "JS"];

coding.forEach(function name(value)  {
   // console.log(value);  
})

coding.forEach((item) => {
  //  console.log(item);
    
})

//Another way for forEach
function printMe(item) {
   // console.log(item);
    
}

coding.forEach(printMe);    //ONLY printME NOT printME(); 



// it also has access of key  , index , and full array

coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
    
})