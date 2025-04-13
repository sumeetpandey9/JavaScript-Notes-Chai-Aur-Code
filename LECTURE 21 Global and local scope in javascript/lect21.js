//global scope
let a = 100
const b = 200
var c = 300  //var has global scope no matter it is defined inside block or globally
d = 400 //global scope

//block scope : let & const have block scope
if(true){
    let a = 1
    const b = 2
    var c = 3
    d = 4
    console.log("Inner:", a); //1
    console.log("Inner:", b); //2
    console.log("Inner:", c); //3
    console.log("Inner:", d); //4
}

console.log("Outer:", a); //100
console.log("Outer:", b); //200
console.log("Outer:", c); //3
console.log("Outer:", d); //4