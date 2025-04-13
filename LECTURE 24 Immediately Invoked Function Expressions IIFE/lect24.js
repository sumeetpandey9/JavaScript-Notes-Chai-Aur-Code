//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

/*Avoid polluting the global namespace: Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern.*/

//many times we have problem with global scope pollution, so to avoid that we use IIFE. 

//**at the end of the IIFE a semicolon is necessary**

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); //DB CONNECTED

//unnamed IIFE / arrow function
(() => {
    console.log(`DB TWO CONNECTED`);
})(); //DB TWO CONNECTED

//IIFE with arguments and parameter
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("hitesh"); //DB CONNECTED TO hitesh

//two IIFE together: write first IIFE then use ; and then write second IIFE below it.
(() => {
    console.log("IIFE1");
})();
(() => {
    console.log("IIFE2");
})();