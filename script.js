//I need variables for the important HTML elements.
const playerChoice = document.getElementById('letterbox');


let wordList = ["leaf", "jungle", "tiger", "swamp", "alligator", "elephant", "waterfall"];

let chancesLeft = 7;

//I need to figure out a random word selector.
let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(randomWord);




 // Display random word in HTML wordspace area and make word invisible before 
 //letters are guessed:

let hiddenWord = "";
for (let i = 0; i < randomWord.length; i++) {
    hiddenWord += "_ ";
}
document.getElementById("wordspace").textContent = hiddenWord;



// Create event listener for submitted letters. 

let playerGuess = document.getElementById('letterbox');
      playerGuess.addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
            console.log(playerGuess.value);
            // Text box needs to clear after each keypress...chancesLeft.
            letterbox.value = "";
        }
});

let startGame
// compar the player's choice against the hidden word. 
// If players hoice is found within the hidden word, display that letter.
// If the players hoice isn't in the hidden word, subtract one try and 
//  corresponding image