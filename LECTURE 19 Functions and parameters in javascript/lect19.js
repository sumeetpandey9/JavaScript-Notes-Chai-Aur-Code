//Function: a sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed

function sayMyName(){
    console.log("P");
    console.log("K");
}
sayMyName //refrence
sayMyName() //execution

//parameter: variables that we pass inside a function declaration
//argumnets: values/variables that we pass during function call

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 4) //7
addTwoNumbers(3, "4") //34 (so we should check if values passed is Number or not)

function addTwo(number1, number2){
    let res = number1 + number2
    return res;
}
const result = addTwo(5, 5)
console.log(result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a valid username!");
        return;
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage("Hitesh"));//Hitesh just logged in.
console.log(loginUserMessage());//Please enter a valid username!