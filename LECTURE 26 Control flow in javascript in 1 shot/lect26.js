/*
//if statement
if(condition){
    //statements
}

// <, >, <=, >=, ==, ===, !=, !==

//if-else
if(condition){
    //if condition is true run this block
}
else{
    //if false runs this block
}
*/

const score = 200

if(score > 100){
    const power = "Fly"
    console.log(`User power: ${power}`);
}
else{
    console.log(`Score less than 100, so can't fly.`);
}

const balance = 1000

//if(balance > 500)   console.log("test1"), console.log("test2"); //correct but bad code

//if else-if
if(balance < 500){
    console.log("Less than 500")
}
else if(balance < 1000){
    console.log("Less than 1000");
}
else{
    console.log("Balance greater than or equal to 1000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Sllow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
/*
//switch case
switch(key) {
    case value:
        //statement
        break;
    default:
        //statement
        break;
}
*/

const month = 11

switch (month) {
    case 1:
        console.log("January");
        break;
    case 12:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Enter correct number");
        break;
}

//Note: if there is no break statement, below codes are also executed until it encounters break.

const day = "Mon"

switch (day) {
    case "Mon":
        console.log("Monday");
        break;
    case "Tus":
        console.log("Tuesday");
        break;
    case "Wed":
        console.log("Wednesday");
        break;
    default:
        console.log("Other days");
        break;
}
const userEmail = "hitesh@gpt.ai"

if(userEmail){
    console.log("Got email ID");
}
else{
    console.log("Don't have user email.");
}

//"hitesh" =>true
//"" => false
//[] => true

//falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values => "0", 'false', " ", [], {}, function(){}

const arr = []
if(arr.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty.");
}

/*
false == 0 //true
false == '' //true
0 == '' //true
*/


//Nullish Coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10
console.log(val1); //5

val1 = null ?? 10
console.log(val1); //10

val1 = undefined ?? 15
console.log(val1); //15

val1 = null ?? 10 ?? 20
console.log(val1); //10


//Terniary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less tah 80") : console.log("more than 80") 
//more than 80