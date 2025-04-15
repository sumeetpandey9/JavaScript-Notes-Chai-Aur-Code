function SetUsername(username){
    //comples DB calls(suppose)
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username) //here SetUsername function is called but as soon as its execution is over, Execution context goes out of call stack and all the context is lost.
    //Therefore we are not able to access variables inside it

    //Therefore to make it work properly we have to hold and keep its refernce, for this we use call()

    //SetUsername.call(username)//only call() also not sufficient, we have to pass current this context
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123@1")
console.log(chai);