let randomNum=parseInt((Math.random()*10)+1);  //to generate a random number greater than 0
const submit=document.querySelector('#subt');  //submit button
const userInput=document.querySelector('#userIn'); //userInput
const guessSlot=document.querySelector('.guesses'); //guesses List[]
const remain=document.querySelector('.remain'); //guesses remaining
const lowOrHi=document.querySelector('.lowOrHi'); //display message
const startOver=document.querySelector('.resultParas'); //paras displaying result
const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess);
    })
}
function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess);
        if(numGuess==11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`)
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess>randomNum){
        displayMessage(`Number is too high`);
    }else if(guess<randomNum){
        displayMessage(`Number is too low`);
    }
    //
}
function displayGuess(guess){
    //
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    numGuess++;
    remain.innerHTML=`${11-numGuess} `
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
    //
}
function newGame(){
    guessSlot.innerHTML='';
    const newGamebtn=document.querySelector('#newGame')
    newGamebtn.addEventListener('click',function(e){
    playGame=true
    randomNum=parseInt((Math.random()*10)+1);
    prevGuess=[];
    numGuess=1;
    remain.innerHTML=`${11-numGuess} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
 })
}
function endGame(){
    userInput.value= '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
