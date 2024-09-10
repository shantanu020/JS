// const names=['shan','ritika','shruti','shubham']
//meth-1 passing anonymous function
// names.forEach(function(item){
//     console.log(item)
// })
//meth-2 passing arrow function
// names.forEach((i)=>console.log(i))
//meth-3 passing refernce of a function
// function printMe(item){
//     console.log(item);
// }
// names.forEach(printMe)
//meth-4 printing item,index and array 
// names.forEach((item,index,arr)=>{console.log(`${index} : ${item} of `,arr)})

//++++++++++++++++++
// const arr=[
//     {
//         name:'shan',
//         age:19
//     },
//     {
//         name:'ritika',
//         age:19
//     },
//     {
//         name:'shubham',
//         age:20
//     },
//     {
//         name:'shruti',
//         age:19
//     }
// ]
//to print whole obj inside arr
// arr.forEach((obj)=>{console.log(obj)})
//to just print a property of the object
// arr.forEach((obj)=>{console.log(obj.name)})