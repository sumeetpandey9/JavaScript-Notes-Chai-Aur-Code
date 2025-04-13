//this: this is used to refer to current context (object)

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website.`);

        console.log(this); //here this will give current object ie. 'user' object
    }
}

user.welcomeMessage() //hitesh, Welcome to website.

user.username = "sam"
user.welcomeMessage()//sam, Welcome to website.

console.log(this); //here 'this' will give an empty object {}
//Note: In browser console , here 'this' will return 'window' object


function chai1(){
    let username = "hitesh"
    console.log(this.username) //undefined
}
chai1()

const chai2 = function(){
    let username = "hitesh"
    console.log(this.username) //undefined
}
chai2()


/*************Arrow function************ */
const chaiArrow = () => {
    let username = "hitesh"
    console.log(this);//{}
}
chaiArrow()

//Explicit return: (when using return keyword)
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));//7

//implicit return 
//Method-1
const addTwo = (num1, num2) => num1 + num2

//Method-2
const addTwo = (num1, num2) => (num1 + num2) 
/*Note: When we use () bracket there is no need to use 'return'. But when we use {} bracket we have to use 'return' */

const add = (num1, num2) => ({username: "hitesh"})
console.log(add(3,4));//{username: "hitesh"}