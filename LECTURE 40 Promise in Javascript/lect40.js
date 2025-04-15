/*Promise: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. */

//creating Promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, Cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve() //connecting resolve with then()
    },1000)
})

//promise consumption
//Note: resolve is connected/associated with then()
promiseOne.then(function(){
    console.log("Promise Consumed")
})


//creating and consuming promise together
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 is complete")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//how data is passed?
//whatever argument we pass in resolve() during promise creation, it will be used as parameter during promise consumption
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    //O/P: { username: 'Chai', email: 'chai@example.com' }
})


//use of reject(), finally() and chaining concept
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        //let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username //value returned from here will be used as argument in the next then() => this is called chaining
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally( () => console.log("The promise is either resolved or rejected"))

//reject() is connected with catch()
//catch() is executed when there is an error and resolve failed to execute
//finally(): to tell if the task is done either resolved or rejected. Ye toh hoga hi hoga. It is a kind of default


//using async, await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "js123"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//fetch()
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() //json conversion also takes time so we have to use await
        console.log(data);
    } catch (error) {
        console.log("ERROR:", error);
    }
}

getAllUsers()

//doing same thing as above using then(), catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})