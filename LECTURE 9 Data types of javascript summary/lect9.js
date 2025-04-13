/* Note : On the basis of how you can store the data and how you can access the data.
Dataypes are of two types in js: 1)Primitive 2)Non primitive or Reference type */

/*1)Primitive Types:
 --call by value
 --7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
 */

 let val = 123
 let floatVal = 123.5
 let outsideTemp = null
 let userEmail;
 
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId) //false
 
 const bigNumber = 23257376746889n
 
 /* 2) Reference (Non primitive):
  --call by refrence
  --Arrays, Objects, Functions
  */
 
 const heros = ["Shaktiman", "Naagraj", "Doga"]
 
 let myObj = {
     name: "hitesh",
     age: 22
 }
 
 const myFunc = function(){
     console.log("Hello World");
 }
 
  //JavaScript is a dynamically typed language, which means you don't need to explicitly specify the data type of a variable when declaring it. 
 
  //typeof => return data type
  /*
  Return type of variables in JavaScript
 1) Primitive Datatypes
        Number => number
        String  => string
        Boolean  => boolean
        null  => object
        undefined  =>  undefined
        Symbol  =>  symbol
        BigInt  =>  bigint
 
 2) Non-primitive Datatypes
        Arrays  =>  object
        Function  =>  function
        Object  =>  object
  */