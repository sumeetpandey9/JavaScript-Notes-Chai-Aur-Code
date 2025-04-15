//for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

//first intialization is done; then condition is checked and THEN stataments inside block is executed and then increment happens--> then again condition is check --> block is executed-> then increment happens and it continues till condition is true


let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);  
}


//break and continue
for (let index = 1; index < 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of i is ${index}`);
}

//continue
for (let index = 1; index < 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${index}`);
}