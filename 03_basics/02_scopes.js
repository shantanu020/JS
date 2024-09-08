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

//nested scopes
function one(){
    const username="shan"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
one()

if (true) {
    const username = "shan"
    if (username === "shan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//++++++++++++++++++++++++ interesting ++++++++++++++++++++++++
//hoisting
//function
console.log(addone(1))
function addone(num){
    return num+1
}


//expression
// console.log(addTwo(0))
const addTwo =function(num){
    return num+2
}
console.log(addTwo(7))
