//for of:-
//for(const iterator of object){} here object doesn't mean actual Object

//for of loop is used to iterate over elements of an array, string and map but not the objects
//In case of array it returns an element per iteration
//In case of String it returns a char per iteration
//In case of map it returns key value pair as an array but we can destruct the array by using [key, value] inside loop in place of key
//objects can't be iterated using for of loop

//for in:-

//for(const key in object){}

//for in loop returns the index and key in case of array and object respectively
//It doesn't give values directly we need to use key and index in order to get values
//Maps are not iterable via using for in loop


//forEach :-

//arr.forEach(callback function)

//forEach loop is used to iterate over each element of an iterable
//it can't be used with object and map as they aren't iterable but it can be used to iterate an array of objects
