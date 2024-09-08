function sayMyName(){
    console.log("Shantanu")
}
// sayMyName()

// function addTwoNumber(number1,number2){
//    console.log(number1+number2) 
// }

// addTwoNumber(2,null)

//the inputs in function definition is called function parameter and the inputs in function call is called arguments
function addTwoNumber(number1,number2){
    return number1+number2 
 }
 
 const result=addTwoNumber(2,9)
//  console.log(result)

function loginUser(username){
    return `${username} just logged in`
}
// console.log(loginUser("shan"))
// console.log(loginUser()) //undefined

// function loginUser(username){
//     if(username=== undefined){
//         console.log("Please enter a username")
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser())

//we can also set a default value 
function loginUser(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUser())