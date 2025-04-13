console.log(2 > 1);//true
console.log(2 >= 1); //true
console.log(2 < 1);//false
console.log(2 == 1); //false
console.log(2 != 1); //true

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false --> conversion of null to a number
console.log(null == 0); //false -->here no conversion to a number
console.log(null >= 0); //true -->--> conversion of null to a number
/*Reason: an equality check '==' and comparison '>, <, >=, <=' work differently.
Comaparisons convert 'null' to a number, treating it as 0. That's why null>=0 is true and null>0 is false.
*/ 

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//strict check: === 
console.log("2" === 2); //false

/* Note: Avoid confusing comparisons. Write clean and clear code.*/