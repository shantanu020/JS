
let myHeros=['thor','spiderman','ironman']

let heroPower={
    thor:'hammer',
    spiderman:'sling',
    ironman:'genius',
    getSpiderPower: function(){
        // console.log(`spidy power is ${this.spiderman}`); 
    }
}
// heroPower.shan() 
// the above code will not work as it is ot the prototype of defined object but we can inject prototypes explicitly by

Object.prototype.shan=function(){
    console.log(`shan is present in all objects`);
    
}
// since we added prototype in the global parent thus protype will be inherited by all the children objects at any level 
// heroPower.shan() 
// myHeros.shan()

// Inheritance

// Prototypal inheritance
// old syntax
const User={
    name:'chai',
    email:'chai@google.com'
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:`JS Assignment`,
    fullTime:true,
    __proto__:TeachingSupport 
    // __proto__ is a property that refers to the internal [[Prototype]] of an object. It is used to access or modify the prototype chain, which is a key concept in JavaScript's inheritance model. Every object in JavaScript has a hidden [[Prototype]] object, and __proto__ provides a way to access this prototype.
    // TASupport inherits from Teaching support
}

Teacher.__proto__=User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

// Now  out aim is to create a prototype that gives the true length of the string removing whitespaces
let myName='Shantanu    '
let mySurName='Yadav    '
Object.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}
myName.trueLength();
mySurName.trueLength();
