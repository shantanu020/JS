// Immediately Invoked Function Expressions (IIFE)
//named IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();
//IIFE is used to prevent a function from the pollution of global scope
//IIFE should have ";"
// simple IIFE
((name)=>(console.log(`DB CONNECT ${name}`)))('shan');

