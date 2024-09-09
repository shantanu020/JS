//truthy value - when we asume a value to be true as in below case we have assumed true

// const userEmail=[]

// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email")
// }

//++++++++++++++++++

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//++++++++++++++++++

//truthy value

// "0", 'false', " ", [], {}, funtion(){}

//+++++++++++++++++++

//correct way to check Arrays
// if(userEmail.length===0){
//     console.log("Array is Empty");
// }

//++++++++++++++++++++

//correct way to check emptyObj
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty")
// }

//++++++++++++++++++++

//note:
//false==0 //true
//false=='' //true
//0==''//true

//+++++++++++++++++++++

//Nullish Coalescing Operator (??):null undefined

// let val1;
// val1=5??10
// val1=null??10
//is value is null it will assign null else it will assign the returmed value by function

//same concept is for undefined
// val1=undefined??10??20 //first not null/undefined value will be assigned
// console.log(val1)

//+++++++++++++++++++++

//ternary operator

//condition ? true : false

// const teaPrice=12
// teaPrice>=10?console.log("greater than 10"):console.log("less than 10")