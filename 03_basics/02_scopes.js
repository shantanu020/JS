var c=300
let a=400
if(true){
    let a=10 //local scope
    const b=20 //local scope
    var c=30 //global scope i.e.  throughout the program
    // console.log("Inner a:",a)
}
// console.log(a)
// console.log(b)
// console.log(c)

for(let i=0;i<10;i++){
    // console.log(i)
}
//the global scope of browser console is different as compaired to the code environment


