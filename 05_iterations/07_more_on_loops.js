// const nums=[1, 9, 2, 4, 28, 19]
// const values=nums.forEach((i)=>{
//     return i;
// })
// console.log(values)
//forEach loop doesn't return anything it is used to perform operation on each value of an iterable


//+++++++++++++++++++++++++++

//to get return values
const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const values=myNums.filter((i)=>i>4)//implicit return
// console.log(values)
// const vals=myNums.filter((i)=>{return i>4})//explicit return
// console.log(vals) 

//acheiving same result using forEach 
// const newNums=[]
// myNums.forEach((i)=>{
//     if(i>4){
//         newNums.push(i)
//     }
// })
// console.log(newNums);

//Example(this type of value we will get from database)
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//fetch books having genre history
//   const userBooks=books.filter((obj)=>obj.genre==='History')
// console.log(userBooks)

//fetch books having publish year >2000
  // const userBooks=books.filter((obj)=>obj.publish>2000)
  // console.log(userBooks)


//fetch books having publish year >1900 and genre=history
// const userBooks=books.filter((obj)=>
//   {
//     return obj.publish>1900 && obj.genre==='History'}
// )
//   console.log(userBooks)