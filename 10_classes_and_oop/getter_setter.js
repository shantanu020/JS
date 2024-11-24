class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return `${this._password.toUpperCase()}shan`
    }
    set password(value){
        this._password=value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
}
const shan =new User('shan.ai','abc')
console.log(shan.password);
console.log(shan.email);
