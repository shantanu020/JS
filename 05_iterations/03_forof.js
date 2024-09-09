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
//maps used to hold key value pair, prevents the insertion order of keys. any value both objects and primitives may be used as either key or value
//contains only unique values

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('IN',"India")
// for(const ele of map){
//     console.log(ele)
// }
// for(const [key,value] of map){
//     console.log(key, ':-', value);
// }