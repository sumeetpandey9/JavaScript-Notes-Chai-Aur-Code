const objOne = new Object()//singleton onject
const objTwo = {} //non singleton object
//this is the only difference b/w two , banki kahani same hai

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sama"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regualrUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chowdhary"
        }
    }
}
console.log(regualrUser.fullname.userfullname.firstname);//hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1 , obj2};
//console.log(obj4);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } //we get obj1 and obj2 inside other obj

const obj4 = Object.assign(obj1 , obj2);
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } //problem with this is that it changes obj1 also

//if you dont want to modify any excisting object use {} with assign
const obj5 = Object.assign({}, obj1, obj2, obj3) //here we get all objects into {} object
console.log(obj5);

//**better way: use spread operator**
const newObj = {...obj1, ...obj2, ...obj3}
console.log(newObj);

console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ] --returns all keys as an array
console.log(Object.values(tinderUser));
//[ '123abc', 'Sama', false ]--returns all values of object as an array
console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sama' ], [ 'isLoggedIn', false ] ]--returns [key,value] pair as an array of array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true