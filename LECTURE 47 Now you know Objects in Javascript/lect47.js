//Can we change the value of PI? If yes, how? If no, why?

//Ans: We cant change the value of PI

console.log(Math.PI); //3.141592653589793
Math.PI = 5
console.log(Math.PI); //3.141592653589793

//Why? beacuse
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
//beacuse writable is set to false and we cant change this writable property. So we cant change value of PI



const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

//here we can enumerate chai object. Beacuse enumerable is true
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

//here we disable 'name' property
Object.defineProperty(chai, 'name', {
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: false,
  configurable: true
}
*/

//here we cant enumerate 'name' property of chai object. Beacuse enumerable is set to false
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}