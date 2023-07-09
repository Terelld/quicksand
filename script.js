


const startButton = document.querySelector(".startbutton");
const userGuess = document.querySelector(".user-guess");

let wordList = ["leaf", "jungle", "tiger", "swamp", "alligator", "elephant", "waterfall"];
let guesses; 
let incorrectLetters = []; 
let correctLetters = [];
let wrongLetter = document.querySelector(".reminder span");
let chancesLeft = document.querySelector(".chancesleft span");
let messageboard = document.querySelector(".messageboard span");

const submissions = document.querySelector(".submissions");
let word;

startButton.addEventListener("click", randomWord);
document.addEventListener("keydown", () => userGuess.focus());

function randomWord() {
     let newWord = wordList[Math.floor(Math.random() * wordList.length)];
        word = newWord;
        guesses = word.length; //number of quesses will equal number of letters.
        correctLetters = []; incorrectLetters = [];
        chancesLeft.innerText = guesses;
        wrongLetter.innerText = incorrectLetters;
        messageboard.innerText = "Make a guess!"; 
        document.getElementById("letterbox").disabled = false;
        console.log(newWord);

        let html = "";
        for (let i=0; i < word.length; i++) {
            html += `<input type="text" disabled>`;
    }
    submissions.innerHTML = html;
    
}
randomWord();


document.addEventListener("keydown", () => userGuess);

userGuess.addEventListener("input", startGame);

function startGame(e) {
    let letter = e.target.value;
    console.log(letter);
    if (word.includes(letter)) { 
        for (let i = 0; i < word.length;  i++) {
            if(word[i] === letter) {
                correctLetters += letter;
                submissions.querySelectorAll("input")[i].value = letter;
            }
        }
        messageboard.innerHTML = "Nice job, keep going!"; 
        } else {
        
        guesses--; //this subracts a guess each time.
        incorrectLetters.push(` ${letter}`);
        messageboard.innerHTML = "Sorry, that is not a match"; 
        }
        wrongLetter.innerText = incorrectLetters;
        chancesLeft.innerText = guesses;
        userGuess.value = "";
    
        if(guesses < 1) {
        messageboard.innerHTML = (`You lost. The word was ${word}!`);
        document.getElementById("letterbox").disabled = true;
           
        } else if(correctLetters.length === word.length && guesses >= 0) {
            messageboard.innerHTML = "You won!!!!";
            document.getElementById("letterbox").disabled = true;
    }
        
        
}
    












