const name="Shan"
const repoCount=15

// console.log(name +repoCount+ " hey") //outdated syntax instead use back ticks


//String interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//String using constructor
const myName=new String('Shantanu-yadav');
// console.log(myName.__proto__); //to access prototype

//String prototypes and methods

// console.log(myName.length);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(4));
// console.log(myName.indexOf('u'));

const newString=myName.substring(0,4);
// console.log(newString);

const anotherName=myName.slice(-7,-5);
// console.log(anotherName);

const str1 = " javaScript ";
// console.log(str1.trim()); //it is used to remove whitespace characters and \n

const url="https://shantanu.com/shantanu%20yadav";
// console.log(url.replace("%20","-"));
// console.log(url.includes('shantanu'));

// console.log(myName.split('-'));