// for of
const arr = [1,2,3,4,5];

for (const num of arr) {        //num will refer to all the entries of that Object (obj here means anything like array , object , string)
    //console.log(num);
    
}

const greetings = "Hello World!"

for(const greet of greetings) {
    if(greet == " ") {
        continue;
    }
    //console.log(`Each Char is ${greet}`);
    
}

const map = new Map();

map.set('In' , "India");
map.set('USA' , "United States of America");
map.set('Fr' , "France");

//console.log(map);

for(const key of map) {
    //console.log(key);
    
}

for(const [key , Value] of map) {
    //console.log(key , ";-" , Value);          // Only maps are iterable this way
    
}

// Not OBJECTS
