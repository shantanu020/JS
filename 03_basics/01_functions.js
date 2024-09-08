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


//if you don't know the limit of number of item eg. Shopping cart

// function calCartPrice(num1){
//     return num1
// }
// console.log(calCartPrice(200,300,400))

//solution is using rest operator ...
function calCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calCartPrice(200,300,400,500,600))


//function taking object as param

const product={
    prod:"boscuit",
    price:100
}
function handleObj(obj){
    console.log(`product is ${obj.prod} and price is ${obj.price}`)
}
// console.log(handleObj(product))
// console.log(handleObj({
//     prod:"gaming console",
//     price:50000
// }))


//function taking array as param

const arr=[200,300,400,500]
function handleArray(anyarr){
    return anyarr[1]
}
// console.log(handleArray(arr))
// console.log(handleArray([1,2,3,4,5,6,7,8,9]))