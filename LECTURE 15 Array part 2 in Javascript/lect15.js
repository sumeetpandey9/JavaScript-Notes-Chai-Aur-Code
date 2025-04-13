const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

marvelHeros.push(dcHeros) //push into the exsiting array
console.log(marvelHeros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHeros[3][1]);//flash

//concat(): concates two or more arrays and returns a new array
const marvelHeros1 = ["thor", "ironman", "spiderman"]
const dcHeros1 = ["superman", "flash", "batman"]
const allHeros = marvelHeros1.concat(dcHeros1)
console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//**spread operator**
const newAllHeros = [...marvelHeros1, ...dcHeros1]
console.log(newAllHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//flattening an array: flat() method
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]], 10]
const flatendArray = anotherArray.flat(Infinity) //flat(depth-upto-which-u-want-to-flaten-array)
console.log(flatendArray);// [1,  2, 3, 4, 5, 6,  7, 6, 7, 4, 5, 10]

//Array.isArray(): returns true or false based on passed argument
console.log(Array.isArray([1,2,3]));//true
console.log(Array.isArray("Hitesh")); //false

//Array.from() : creates a new array
console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Hitesh" , age: 24}));//[] //interesting case (here we have to specify we want array based on keys or values, otherwise it will return empty array.)

//Array.of()
let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]