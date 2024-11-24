const descripter=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// It's wrotable property is hardcoded false so we can't change it

// Hardcoding properties of custom objects
// factory function
// const myObj=Object.create(null)

const chai={
    name:"ginger-tea",
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log('chai nhi bni');
    }

}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// desrupting property
Object.defineProperty(chai,'name',{
    writable:false,
    // prevents overridding of a property
    enumerable:false 
    // prevents iteration of a property 
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);
    }
    
}
// name property is not iterable
