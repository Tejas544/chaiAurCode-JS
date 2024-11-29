// Immediately Invoked Function Expressions

//Instead of

function chai() {
    console.log("Hello user, DB connected");
    
}
chai();

//we can use 
(function chai() {
    console.log("Hello user ,DB connected");
})();


// *************SEMICOLON is MUST to END IIFE ***************************************

//arrow function can be used as well

( () => {
    console.log("DB , connected");
})();


( (name) => {
    console.log(`DB , connected${name}`);
})("hitesh")