let myName = "hitesh    "
let myChannel = "Chai      "

//we want to get true length of the word, we can do it by below method 
console.log(myName.trim().length);

//[BUT we want to create a function that can perform this task]
//console.log(myName.trueLength())



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance
//proto-typical inhertance: how one object can access properties of some other objects

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User //Teacher can access properties of User also

//But above used syntax is outdated

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
//now TeachingSupport can access all properties of Teacher also


//Todo that we wanted to do at starting of the code[Get true length of string]
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()