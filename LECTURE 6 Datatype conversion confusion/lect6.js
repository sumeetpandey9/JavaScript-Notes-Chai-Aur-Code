let score1 = 33;
console.log(typeof score1); //number

/* ------------Conversion to number ------ */
let score2 = "33";
console.log(typeof score2);
let score2InNumber = Number(score2); //Number --> string is converted into a number
console.log(typeof score2InNumber);

let score3 = "33aaa";
console.log(typeof score3);
let score3InNumber = Number(score3);
//Note: this is not a number but still js convert it into a number. Its type will be number, but value will be "NaN". So whenever you convert string to number always check for this NaN case.
console.log(typeof score3InNumber); //number
console.log(score3InNumber); //NaN

let a = null;
let aInValue = Number(a);
console.log(typeof aInValue); //number
console.log(aInValue); // 0

let b = undefined;
let bInValue = Number(b);
console.log(typeof bInValue); //number
console.log(bInValue); // NaN

let c = "Hitesh";
let cInValue = Number(c);
console.log(typeof cInValue); //number
console.log(cInValue); // NaN

//true -> 1 ; false -> 0

/* ------------Conversion to boolean ------ */
let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn); // true
console.log(typeof booleanLoggedIn); // boolean
//1 => true; 0 => false ; 8 => true
//"" => false ; "Hitesh" => true

/* ------------Conversion to string ------ */
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); //string
console.log(stringNumber); //33