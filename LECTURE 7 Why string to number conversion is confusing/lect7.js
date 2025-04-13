/*******************Operations************************** */
let value = 3
let negValue = -value
console.log(negValue) //-3

console.log(2+2); //4
console.log(2-2); //0
console.log(2*2); //4
console.log(3/2); //1.5
console.log(3%2); //1
console.log(2**3); //8

let str1 = "Hello "
let str2 = "Hitesh"
let str3 = str1 + str2
console.log(str3); //Hello Hitesh

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(true); //true
console.log(+true); //1
console.log(+""); //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //not recommended way
console.log(num1); //4
console.log(num2); //4
console.log(num3); //4

//prefix and postfix in js
let gameCounter = 100
gameCounter++
console.log(gameCounter); //101
++gameCounter
console.log(gameCounter);//102

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a1 = 3;
const b1 = ++a;
console.log(`a:${a1}, b:${b1}`);
// Expected output: "a:4, b:4"


//++(++x); 
//(x++)++
// SyntaxError: Invalid left-hand side expression in prefix operation

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

/* In JavaScript, you can work with regular numbers (like 1, 2, 3) and also with BigInt numbers (like 1n, 2n, 3n). BigInt is a special type of number that allows you to work with very large integers beyond the normal JavaScript number limit.*/