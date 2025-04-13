const score = 400
console.log(score);//400

//this gurantees it is a number
const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3

//toFixed() : number of digits after decimal
console.log(balance.toFixed(2));//100.00

//toPrecision(): total number of digits
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //23.9
console.log(otherNumber.toPrecision(2));//24
console.log(1234.78945.toPrecision(3)); //1.23e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//other number methods
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER

/***************Maths************** */
console.log(Math.abs(-4)); //4

console.log(Math.round(4.6));//5
console.log(Math.round(4.2));//4
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4

console.log(Math.min(4, 3, 6, 8));//3
console.log(Math.max(4, 3, 6, 8));//8

//***NOTE==> Math.random()
console.log(Math.random());//any value b/w 0 and 1

//if we want random value b/w 1 and 10
const randVal = Math.floor(Math.random() * 10) + 1;
console.log(randVal); 

//if we want random value b/w min and max
const min = 10
const max = 20
const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomValue);