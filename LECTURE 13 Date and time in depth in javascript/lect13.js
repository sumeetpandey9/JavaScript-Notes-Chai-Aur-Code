//Dates in js

/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

let myDate = new Date()
console.log(myDate); //2024-01-17T17:03:53.379Z
console.log(myDate.toString()); //Wed Jan 17 2024 17:04:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Wed Jan 17 2024
console.log(myDate.toISOString()); //2024-01-17T17:06:33.508Z
console.log(myDate.toJSON()); //2024-01-17T17:07:36.266Z
console.log(myDate.toLocaleString());//1/17/2024, 5:08:18 PM
console.log(myDate.toLocaleDateString());//1/17/2024

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toLocaleString());//1/23/2023, 12:00:00 AM

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());//1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString());//1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString());//1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp); //1705512093789 //this gives current time in millisecond

console.log(myCreatedDate1.getTime());//1674432000000//time till that date in milliseconds

console.log(Math.floor(Date.now()/1000));//1705512258 //current time in seconds

let newDate = new Date()
console.log(newDate.getDate()); //17//todays date
console.log(newDate.getDay());//3//wed, so 3rd day
console.log(newDate.getMonth());//0 // indexing starts from 0 so JAN is 0
console.log(newDate.getFullYear());//2024

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    //we can add other modifications as well here
}))
//Wednesday