function SetUsername(username){
    // complex DB calls;
    this.username=username;
    console.log('called')
}
function createUser(username, email, password){
    // SetUsername(username)
    // it is getting called but not useful as it is not holding reference
    // to hold reference use call
    // SetUsername.call(username)
    // in this case the called function is using its reference so it will be deleted after the completion of function call
   
    SetUsername.call(this,username)
    // now in this case we are explicitly passing the reference of the current EC(Execution context)
    // call is used to pass the current EC to some other function

    this.email=email,
    this.password=password

}
const chai =new createUser("chai","chai@fb.com","123")
console.log(chai);