//reduce methode executes a user supplied reducer : reduce((accumulator, currentValue) => accumulator + currentValule, initialValue)

//accumulator is empty variable with initialValue 0 it is used to accumulate result;
//currentValue holds the current value of the array




// const nums=[1, 2, 3, 4, 5]
//without using arrow function
// const newNums=nums.reduce(function(acc,currval){
//     console.log(`acc : ${acc}, currval : ${currval}`)
//     return acc+currval
// },0)
// console.log(newNums)


//with arrow function
// const newNums=nums.reduce((a,c)=>(a+c),0)
// console.log(newNums)



//+++++++++++++++++++++++++++
//example
// const shoppingCart=[
//     {
//         itemName:"js course",
//         price:1500
//     },
//     {
//         itemName: "DS course",
//         price:3000
//     },
//     {
//         itemName: "py course",
//         price:3000
//     }
// ]
//add prices of the shopping cart
// const total=shoppingCart.reduce((a,c)=>(a+c.price),0)
// console.log(total)