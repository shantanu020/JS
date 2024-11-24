// object literal
const user={
    username: "Shan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username:${username}`) 
        // not defined
        console.log(`Username:${this.username}`)
        // Username:Shan
        console.log(this);
        
    }
}
const user2={
    username: "Ritika",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username:${username}`) 
        // not defined
        console.log(`Username:${this.username}`)
        // Username:Ritika
        console.log(this);
        
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this)
// in node environment this will give output {} but in browser console it will give window

// -------------------------------------------------------------------------------------------------------

//  CONSTRUCTOR FUNCTION (new keyword)
// new keyword is used to make new context

function User(username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}
// without new keyword
// const userOne=  User("Shan",12,true);
// const userTwo=  User("js",13,false);
// console.log(userOne)
// inconsistency in data (userOne gets override by userTwo)

// With new keyword 
const userOne= new User("Shan",12,true);
const userTwo= new User("js",13,false);
console.log(userOne.constructor);
// returns the constructor function of object
console.log(userTwo)
// no data inconsistency
console.log(userTwo instanceof User)
// true
// instanceof is used to check if particular object is instance of a constructor or not



