class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
    // static keyword prevents the acces to object and child classes
}
const shan=new User('Shan')
// console.log(shan.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const iphone=new Teacher('iphone','i@apple.com')
iphone.logMe()
// console.log(iphone.createId());