// array

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//arrays in javascript are hetrogenous and resizable but are not associative arrays
//JavaScript array copy creation creates shallow copies of array (same reference)

const Heroes =["Shaktiman","naagraj"]

const nums=new Array(1,2,3,4,5,6)

// console.log(arr[0])

//methods of array
// arr.push(9)
// arr.push(29)
// arr.pop()

arr.unshift(0) //to insert element at the start by shifting each element by one

arr.shift() // to pop a value from the begining of the array
// console.log(arr)

// console.log(arr.includes(9))
// console.log(arr.indexOf(9))

const newArr=arr.join();
// add all elements of the array to a string

// console.log(arr) // array
// console.log(newArr) //string

//slice, splice
// console.log("A ",arr)

const arr2=arr.slice(1,3) //doesn't manipulates the oriiginal array
// console.log(arr2)
// console.log("B ",arr)

const arr3=arr.splice(1,3) //manipulates the original array i.e removes spliced elements from the original array
// console.log(arr3)
// console.log("c ",arr)

