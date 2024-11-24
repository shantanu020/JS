class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// extends keyword 

class Teacher extends User{
    constructor(username,email,password){
        super(username)    
        // similar to functionName.call in
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}
// User class is parent while Teacher class is child 
// the methods of parent are available to child nut specialized methods of child aren't available to parent
const chai=new Teacher('chai','chai@kiet.edu','1234')
chai.addCourse();
const tea =new User('masalachai')
tea.logMe();
chai.logMe();

// console.log(chai===tea);
// false

// console.log(chai instanceof User)
// true
