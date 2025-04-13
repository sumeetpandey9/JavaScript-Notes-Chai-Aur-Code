const name = "Hitesh "
const repoCount = 50

console.log(name + repoCount + " Value") //not recommended
//use Backticks instead: (String interpolation)
console.log(`Hello, my name is ${name}and my repo count is ${repoCount}`);
const gameName = new String("hiteshhc")
console.log(gameName);


const gameName = new String("hiteshhc")
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__); //we dont need to write __proto__ everytime, we can directly access all the methods as below
console.log(gameName.length);//8
console.log(gameName.toUpperCase());//HITESHHC
console.log(gameName.charAt(1));//i
console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0,4) //last index is not included ; here negetive value is ignored
console.log(newString);

const anotherString = gameName.slice(0,4) //last index is not included ; here negetive value is also allowed 
console.log(anotherString);

const newStringOne = "     Hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split(""));