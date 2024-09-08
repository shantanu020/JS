// const tinder=new Object() //singelton object

// const tinder={} //non singelton object

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="samay"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const user={
    email: "user@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Shantanu",
            lastName: "Yadav"
        }
    }
}

//Object can have Objects as values
// console.log(user.fullname.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"c"}

const obj3={obj1,obj2} //return a object containing obj1,obj2
// console.log(obj3)

const obj4=Object.assign({},obj1,obj2) //returns a object combining two or more objects into the target object, {} is target all other objects are source, target and returned target will be equal after operation
// console.log(obj4)


//most used spread operator ...

const obj5={...obj1,...obj2}
// console.log(obj5)

//when values come from database
const us=[
    {
        id:1,
        email:"us@gmail.com"
    },
    {
        id:1,
        email:"us@gmail.com"
    },
    {
        id:1,
        email:"us@gmail.com"
    },
]
console.log(us[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) //returns array of keys
console.log(Object.values(tinderUser)) //returns array of values
console.log(Object.entries(tinderUser)) //return array with array of key value pair as entries

//to check if a property is available or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"))