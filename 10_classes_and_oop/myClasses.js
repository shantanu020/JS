// ES6

// syntactical sugar

class User{
    constructor(username,email,password){
        // parameters
        this.username=username;
        this.email=email;
        this.password=password;
    }
    // methods
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new User('chai','chai@google.com','123')
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// BEHIND THE SCENE

// function User(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;
// }
// User.prototype.encryptPassword=function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername=function(){
//     return `${this.username.toUpperCase()}`
// }
// const chai=new User('chai','chai@google.com','123')
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())