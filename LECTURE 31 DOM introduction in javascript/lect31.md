console.log(window)
console.log(window.document)
or
console.log(document) //gives all the HTMLs and other web page related codes 
console.dir(document)  //gives hidden information as well


document.getElementById( element_ID )
let html = document.getElementById("myP").innerHTML; //this gives text inside of this myP ID
Change the HTML content of an element with id="demo”
document.getElementById("demo").innerHTML = "I have changed!";

![alt text](<DOM lec31.png>)


console.log(document.link) //gives all the links in the webpage.
Note⇒ these links are not in the form of array , they are HTML Collection.