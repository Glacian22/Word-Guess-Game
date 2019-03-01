var secretWord = "waffles";
var userGuess;
var guessesLeft = 10;
var lettersGuessed = document.getElementById("letters-guessed");

var wordOnPage = {
    secretWord: "waffles",
    letters: []
}

function gameStart(){
    //choose secret word, hardcoded right now

    //draw in underscores equal to secret word
    for(var i=0; i<wordsOnPage.secretWord.length; i++){
        wordOnPage.letters[i] = "_";
    }




}


gameStart();

document.onkeyup = function (event) {

    userGuess = event.key;

    //add the most recent guess to the string lettersGuessed, write to page
    lettersGuessed.textContent += userGuess;

    //decrement guessesLeft and write to page
    guessesLeft--;
    document.getElementById("guesses-left").textContent = guessesLeft;
}
