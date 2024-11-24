const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
        
    },1000)
})
promiseOne.then(function(){
    console.log('promiseOne consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed")
        resolve()
    },1000)
    
}).then(function(){
    console.log('Async task 2 consumed');
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"hello",email:"shan@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"shan",pass:"1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
    
})
// chaining the above then will return value to lower then
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then(username=>console.log(username))
.catch(function(err){console.log(err)})
.finally(function(){console.log("The promise is either resolved or rejected")})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",pass:"1234"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})
// we can use async await in place of then to resolve the async task but it can't be used for error
// async function consumePromiseFive() {
//     const response=await promiseFive
//     console.log(response);
// }
// consumePromiseFive();

// for  gracefull error use try catch block in async await
 async function consumePromiseFive() {
    try {
        const response= await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
 }
 consumePromiseFive();

//  using fetch()
// this will be executed first due to high priority queue called micro task queue (fetch queue) if time isn't specified

// method-1
//  async function getResponse() {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: "+error);
//     }
//  }
//  getResponse();

// method-2
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch((err)=>console.log(err))
