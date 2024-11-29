const marvel_heroes = ["IronMan" , "Thor"  , "Cap"]
const dc_Heroes = ["Superman" , "Batman " , "Flash"]

//if we .push 2nd in one it will get added as array

//marvel_heroes.push(dc_Heroes);

console.log(marvel_heroes);

//BUT CONCAT will do right

//const all1 = marvel_heroes.concat(dc_Heroes);

//console.log(all1);


//another good way is to use spread ...

const all2 = [...marvel_heroes , ...dc_Heroes];
console.log(all2)

const newArr = [1,2,3,[3,4,5] , 4 , [34 , [3 ,5]]]
const newArrGood  = newArr.flat(Infinity)

console.log(newArrGood);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))


let score1  =100
let score2  = 200;
let score3 = 300
console.log(Array.of(socre1  ,score2 , score3))

//if we pass object directly it will return empty arr becoz it doesn't know kiska arr banana hai

