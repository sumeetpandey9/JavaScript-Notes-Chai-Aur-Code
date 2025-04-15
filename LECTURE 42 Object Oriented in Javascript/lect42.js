//object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");

        //this: this refers to current context
        console.log(this); //this will give current object
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


//Constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; //by default also it returns this only
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 100, false)
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor) //[Function: User]

console.log(userOne instanceof User); //true


/*new keyword: 
Step-1: when new is used an empty object is created, which is called an instance
Step-2: a constructor function is called
Step-3: this is injected
Step-4:you get whatever is in the function
*/