// is function a object?
// Yes function in js is a object as well as a function depending upon the usecase

function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power=2;
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype) 

function createUser(username,score){
    this.username=username;
    this.score=score;
}
// below are the prototypes of createUser function.. they are not just a normal function
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printme=function(){
    console.log(`price is ${this.score}`)
}
// The printme and increment methods are accessible via createUser.prototype, so when you create an object using new, these methods become available to the created instance.
const chai=new createUser('chai',25)
const tea=new createUser('tea',250)
// if we remove new keyword then printme method will not work as new keyword specifies if the certain function should be treated as constructor or just a function
chai.printme()