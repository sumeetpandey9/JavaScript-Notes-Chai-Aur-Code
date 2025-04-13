//nested scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website); //error =>website out of scope

    two()
}

one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); // error =>website out of scope
}
//console.log(username); //error=> username out of scope

/* ++++++++++Interesting+++++++++ */

console.log(addOne(5));//6 => correct => function declarations can be hoisted

//function declaration
function addOne(num){
    return num + 1;
}

//console.log(addTwo(5));//error=>function expressions cant be hoisted

//function expression
const addTwo = function(num){
    return num + 2;
}

console.log(addOne(5)); //6
console.log(addTwo(5)); //7
