const heroes =["ironman","thor","hulk"]
const dc_hero=["flash","batman","superman"]

// heroes.push(dc_hero) //array will be pushed inside array because array can take any data (array, boolean, object etc)

// console.log(heroes)
// console.log(heroes[3][1])

// const allHeroes=heroes.concat(dc_hero) //merges the arrays properly
// console.log(allHeroes)

//better approach is using ....
const all_new_heroes=[...heroes,...dc_hero]
// console.log(all_new_heroes)

const arr4=[1,2,3,[4,5,6],7,[8,9,0,[1,2]]]
// console.log(arr4)
//to solve above problem use flat()
const arr5=arr4.flat(Infinity) //converts array of arrays into single array, flat methods take depth as parameter
// console.log(arr5)

// console.log(Array.isArray("Shantanu")) //to check if something is array or not

// console.log(Array.from("Shantanu")) //converts something into array


// console.log(Array.from({name:"Shantanu"})) //interesting  empty array

let score1=100;
let score2=200;
let score3=300;

// console.log(Array.of(score1,score2,score3)) //this method returns array of passed parameters

