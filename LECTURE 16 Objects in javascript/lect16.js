//singleton
//Object.create()

//object literals
const obj = {}

const mySym = Symbol("key1")//making string "key1" a symbol

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chodhary",
    [mySym]: "mykey1", //using symbol as key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tus"]
}

console.log(jsUser); //prints whole jsUser object
console.log(jsUser.email);//accessing value of "email" key
console.log(jsUser["email"]); //better way of accessing values
console.log(jsUser["full name"]);//here we cant use . to access "full name" -->(a)
console.log(jsUser[mySym]);//to access symbol key-->(b)

/* (a) and (b) are the advantages of [] over .
*/

//modifying object values
jsUser.email = "hitesh@chatgpt.com"
console.log(jsUser.email);//hitesh@chatgpt.com

//Object.freeze(): used to freeze object, after this any changes made to object will not reflect in the object
//Object.freeze(jsUser)
jsUser["email"] = "hitesh@mssoft.com"
console.log(jsUser.email);//hitesh@chatgpt.com //email was not changed bcoz we freezed the object

//in js functions are treated as type-1 or first class citizen, because we can use function as we use normal variable
jsUser.greetingOne = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this keyword is used to access keys within that object
}

console.log(jsUser.greetingOne()); //Hello JS user
console.log(jsUser.greetingTwo()); //Hello JS user, Hitesh

console.log(jsUser.greetingTwo); //[Function (anonymous)] //here we are not invoking function islye it is returning whole function itself