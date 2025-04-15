//filter() -- unlike forEach(), filter() returns values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)

console.log(newNums);
//[ 5, 6, 7, 8, 9, 10 ]

//whenever we use {} brackets we have to use return keyword
const newNums1 = myNums.filter( (num) => {
    return num > 4
} )

console.log(newNums1);
//[ 5, 6, 7, 8, 9, 10 ]


//doing same thing as above using forEach()

const newNums2 = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums2.push(num)
    }
})

console.log(newNums2);
//[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (book) => book.genre === 'History' )

userBooks = books.filter( (book) => {
    return book.publish >= 2000 && book.genre === "Science"
} )

userBooks = books.filter( (book) => book.edition >= 2005 && book.publish >= 2000)
console.log(userBooks);
/*********map() method *********/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10 )

console.log(newNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//chaining
const newNumChain = myNums
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 50)

console.log(newNumChain) //[ 51, 61, 71, 81, 91, 101 ]

//The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
//*************Array.reduce()********************
const array1 = [1, 2, 3, 4, 5]
const initialValue = 0
const sum = array1.reduce( (accumulator , currentValue) => accumulator + currentValue , initialValue)

console.log(sum); //15

const arr = [1, 2, 3]
const total = arr.reduce( function(acc, currVal) {
    console.log(`acc = ${acc} and currVal = ${currVal}`)
    return acc + currVal
}, 0)
console.log(total) 
/*
Output:
acc = 0 and currVal = 1
acc = 1 and currVal = 2
acc = 3 and currVal = 3
6
*/

const arr1 = [1, 2, 3, 4]
const arr1Total = arr1.reduce( (acc, currVal) => acc + currVal , 0)
console.log(arr1Total); //10


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0 )
console.log(priceToPay); //22996