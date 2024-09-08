// objects

// singleton (when object is made from constructor)
// Object.create


// object literals
const user={
    name:"shantanu",
    age:19,
    location:"ghaziabad",
    email:"shantanu@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//how to access Objects
// console.log(user.email)
// console.log(user["email"]) // in key value pair key is always treated as a String


//how to use symbol as key
const mySym=Symbol("Key1")
const user2={
    [mySym]:"myKey1"
}
//symbol reference should be placed in [] to be treated as key
// console.log(user2[mySym])

//how to override values
user.email="shan@google.com"
// console.log(user["email"])

//to prevent accidental changes  in object we can freeze or lock the object
// Object.freeze(user)

user.email="shan@oracle.com"
// console.log(user)
// console.log(user2)

//how to add functions in object

user.greeting=function(){
    console.log("Hello user")
}
user.greetingTwo=function(){
    console.log(`Hello ${user.name}`)
}
// console.log(user.greeting())
// console.log(user.greetingTwo())