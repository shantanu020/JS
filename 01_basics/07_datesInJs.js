//Dates

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString()) //returns a string with date and time
// console.log(myDate.toDateString()) //returns a string with date only
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString('en-IN'))
// console.log(myDate.toLocaleString('en-IN'))

// console.log(typeof myDate) //object

// let myCreatedDate=new Date(2024,0,26,5,3)
// console.log(myCreatedDate.toLocaleString())

let myNewDate =new Date("01-26-2024")
// console.log(myNewDate.toLocaleString())

let myTimeStamp=Date.now(); //returns miliseconds 
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.round(Date.now()/1000))


let today=new Date();
// console.log(today.getMonth()+1)
// console.log(today.getDay())
// console.log(today.getDate())

today.toLocaleString('default',{
    weekday: "long"
})