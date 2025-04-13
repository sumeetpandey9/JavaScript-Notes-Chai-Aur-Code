/*
JavaScript arrays are resizable and can contain a mix of different data types.
JavaScript array-copy operations create shallow copies.
A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
A deep copy of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
*/

let myArray = [1,2,3,true, "Hitesh"]

let myHeros = ["IronMan", "Capt. America", "Thor"]

let myArr = new Array(1,2,3,4,5,6) //another way of defining array in js

console.log(myHeros[2]);//accessing array elements in js //O/P-Thor

let arr = [1, 2, 3, 4, 5]
//push()-push element at the end of the array
arr.push(6)
arr.push(7,8)
console.log(arr);

//pop()-delete element from end of array
arr.pop()
console.log(arr);

//unshift()-adds element at the start of array
arr.unshift(0)
arr.unshift(10,9)
console.log(arr);

//shift()-delete element from start of the array
arr.shift()
console.log(arr);

//includes()-true or false based on element exsits in arr or not
console.log(arr.includes(0));

//indexOf(): returns index of element, if not present then -1
console.log(arr.indexOf(7));
console.log(arr.indexOf(12));

//join() : converts array into string
let newStr = arr.join()
console.log(arr);
console.log(newStr);
console.log(typeof newStr);//string

//slice(): returns a new array containing the extracted elements.The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const newAnimals = animals.slice(2,4)
console.log(newAnimals);//[ 'camel', 'duck' ]
console.log(animals);//[ 'ant', 'bison', 'camel', 'duck', 'elephant' ] //original array is not modified

//splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Here original array is changed.
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");//remove 1 element at index 2, and insert "trumpet"
console.log(removed); //[ 'drum' ]
console.log(myFish);//[ 'angel', 'clown', 'trumpet', 'sturgeon' ] //original array is also modified