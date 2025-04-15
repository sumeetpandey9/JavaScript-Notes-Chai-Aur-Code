//**********for-of loop************

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
}

const greetings = "Hello World!"

for(greet of greetings){
    if(greet === " ")
        continue
    console.log(`Each char is: ${greet}`);
}


/*Maps: *key, value pair
        *uniques keys
        *maintains order in which these key value pairs are inserted
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

//for of loop on map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//for of loop on object: for of is not used with object
const obj = {
    game1: "NFS",
    game2: "Spiderman"
}
/************For-in loop**************/
//for object iteration we use 'for in loop'
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObj){
    console.log(`${key} : ${myObj[key]}`);
}

//for-in for array
const arr = ["js", "cpp", "swift", "java", "python"]

for(const key in arr){
    console.log(key);//this will give index of array elements and not the element
    //to get array elements
    console.log(arr[key]);
}
//so avoid using for-in with arrays

//Note: for-in is not used with maps
//***********forEach loop*************

const coding = ["js", "ruby",
"java", "cpp", "python"]

//Way-1
coding.forEach( function(val){
    console.log(val);
} )

//Way-2
coding.forEach( (item) => {
    console.log(item)
} )

//Way-3
function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //Note:here we only pass function reference

/*
Output of all 3:
js
ruby
java
cpp
python
*/

//forEach have access to index and whole array, apart from array items

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
/*
Output:
js 0 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
ruby 1 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
java 2 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
cpp 3 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
python 4 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
 */


//array off objects

const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "python",
        fileName: "py"
    },
    {
        languageName: "C++",
        fileName: "cp"
    } 
]

myCoding.forEach( (item) => {
    console.log(item.fileName);
})

/**
Output:
js
py
cp
*/

//The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.

//forEach() always returns undefined and is not chainable. 
//Therefore we use map() and other functions

//There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behaviour, the forEach() method is the wrong tool.

//forEach() do not allow chaining