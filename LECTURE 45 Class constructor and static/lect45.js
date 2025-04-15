//ES6

//inside a class a fucntion is called method

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc#`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "chai@gmail.com", "1234@1")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//behind the scene
//if class is not available this is how codes were before

function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

Object.prototype.encryptPassword = function(){
    return `${this.password}abc#`
}

Object.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("Tea", "tea@gmail.com", "123tea@")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
//inheritance

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USER NAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@gmai.com", "123")

chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()
//masalaChai.addCourse() //no access

console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true
console.log(masalaChai instanceof User); //true
console.log(masalaChai instanceof Teacher); //false
//static properties

//static: to prevent access to a method we use static

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")

hitesh.logMe()///logMe() is accessible

//console.log(hitesh.createId()); //createId() method cant be accessed now. Because it is static

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe() //logMe() is accessible

//console.log(iphone.createId()); //createId() method cant be accessed now. Because it is static

//Note: static is used to prevent inheritance