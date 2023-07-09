//I need variables for the important HTML elements.
//const playerChoice = document.getElementById('letterbox');


const startButton = document.querySelector(".startbutton");
const userGuess = document.querySelector(".user-guess");
let letterbox = document.getElementById("letterbox");



let wordList = ["leaf", "jungle", "tiger", "swamp", "alligator", "elephant", "waterfall"];
let maxGuesses; 
let chancesLeft;
let incorrectLetters = []; 
let correctLetters = [];
let wrongLetter = document.querySelector(".reminder span");

const submissions = document.querySelector(".submissions");
let word;

function randomWord() {
    let newWord = wordList[Math.floor(Math.random() * wordList.length)];
    word = newWord;
    maxGuesses = word.length;
    correctLetters = []; incorrectLetters = [];
    //chancesLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
    console.log(newWord);

    let html = "";
    for (let i=0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    submissions.innerHTML = html;
}
randomWord();


//let wrongLetters = [];
//let wrongLetter = document.querySelector(".reminder span");

document.addEventListener("keydown", () => userGuess);

userGuess.addEventListener("input", startGame);

function startGame(e) {
    let letter = e.target.value;
    console.log(letter);
    if (word.includes(letter)) { 
        for (let i = 0; i < word.length;  i++) {
            if(word[i] === letter) {
                submissions.querySelectorAll("input")[i].value = letter;
            }
        }
        console.log("It is a match!") 
    } else {
        
        //incorrectLetters.push(' ${letter}')
       incorrectLetters.push(` ${letter}`)
        console.log("not a match");  
    }
    wrongLetter.innerText = incorrectLetters;
  
}



startButton.addEventListener("click", randomWord);
