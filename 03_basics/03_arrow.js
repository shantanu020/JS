// this is used for refering current context
 

const user ={
    username:"shan",
    price:999,
    welcome:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
    
}
// user.welcome()
// user.username="sam"
// user.welcome()
// console.log(this) //empty object in case of node environment 
//in case of browser console current context will be window

// function chai(){
//     let username="Shantanu"
//     console.log(this.username); //undefined as this can be only used for objects
// }
// chai()


//other method to declare function
//arrow function
const chai=()=>{
    let username="Shantanu"
    console.log(this.username)
    console.log(this)
}
// chai()
// const add=(num1,num2)=>{
//     return num1+num2
// }
// console.log(add(2,9))

//shorthand notation
// const add=(num1,num2)=>(num1+num2)
// console.log(add(2,9))

//function name=(params)=>(return value)

//returning object
 const add=(num1,num2)=>({
    username:"shan"})
 console.log(add(2,9))