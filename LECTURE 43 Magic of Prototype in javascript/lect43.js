function multipleBy5(num){
    return num * 5;
}

multipleBy5.power = 2

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{}

//Everything in javascript in an object at the end.

//function is a function. But it is also an object in javascript. Anything in javascript we can make behave like an object.


//injecting methods in our own created function
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("Chai", 25)
const tea = new createUser("Tea", 250)

chai.printMe()
tea.printMe()

/*

Here is what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

Th constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value( object, array, function, etc.), the newly created object is returned.

*/