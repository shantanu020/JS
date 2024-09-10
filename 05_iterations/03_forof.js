// for of
// ["", "", ""]
// [{}, {}, {}]
//++++++++++++++++++++++++++++++++
// const arr=[1, 2, 3, 4, 5]
// for (const element of arr) {
//     console.log(element)
// }
//+++++++++++++++++++++++++++++++++
// const greetings="Hello world"
// for(const greet of greetings){
//     console.log(greet);
// }
//++++++++++++++++++++++++++++++++++
//map objects are used to hold key value pairs, prevents the insertion order of keys. any value both objects and primitives may be used as either key or value
//contains only unique values

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('IN',"India")

//below loop will print the key value pair as a array
// for(const ele of map){
//     console.log(ele)
// }

//destructing of array
// for(const [key,value] of map){
//     console.log(key, ':-', value);
// }

//++++++++++++++++++++++++++++
// const obj={
//     'game1':'NFS',
//     'game2':'CS'
// }

// for(const [key,value] of obj){
//     console.log(key,' :- ',value)
// }
//above code will generate error as objects are not iterable 