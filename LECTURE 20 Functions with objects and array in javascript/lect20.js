//rest operator '...' => this bundles all the numbers in an array and returns an array
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 500, 400, 2000)); //[ 200, 500, 400, 2000 ]

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice1(200, 500, 400, 2000));//[ 400, 2000 ] => here first two values go to val1 & val2 and rest to num1

//object 
const user = {
    username: "Sam",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user) //Username is Sam and price is 199

handleObject({
    username: "Hitesh",
    price: 399
}) //Username is Hitesh and price is 399

//arrays
const myNewArray = [200, 400, 100, 500]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray)); //400