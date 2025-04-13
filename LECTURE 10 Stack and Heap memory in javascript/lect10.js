/*********Stack and Heap***** */
//Stack: Primitive; Heap: Non primitive

//Stack: Primitive - a copy is created
let myYoutubeName = "hiteshchoudhary"
let anotherName = myYoutubeName
console.log(anotherName);

anotherName = "chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);

//Heap: Non primitive - reference is used, since refrence is used changes will reflect in original also. (When you take refrence back from heap , you dont get a copy, you get refrence of original value)
let userOne = {
    email : "userone@gmail.com",
    upi : "user1@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
//here we made change in userTwo but it will reflect in userOne as well.