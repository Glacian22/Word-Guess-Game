var userGuess;
var guessesLeft = 10;
var lettersGuessed = document.getElementById("letters-guessed");

var wordOnPage = {
    secretWord: "waffles",
    letters: []
}

//function for updating the word on page with correct letters replacing underscores
function updateWord() {

    //erases existing word
    document.getElementById("current-word").textContent = "";

    for (var i = 0; i < wordOnPage.secretWord.length; i++) {

        document.getElementById("current-word").textContent += wordOnPage.letters[i];
    }
}

//called when page is loaded or game is restarted
function gameStart() {
    //choose secret word, hardcoded right now

    //erases existing word in case of new game
    document.getElementById("current-word").textContent = "";

    //draw in underscores equal to secret word
    for (var i = 0; i < wordOnPage.secretWord.length; i++) {
        wordOnPage.letters[i] = "_";

        document.getElementById("current-word").textContent += wordOnPage.letters[i];
    }

}


gameStart();

document.onkeyup = function (event) {

    userGuess = event.key;



    var position = wordOnPage.secretWord.indexOf(userGuess);

    //check if the letter exists in the secret word
    if (position !== -1) {
        //guess matched something, loop over array and replace underscores with matched letter, then call updateWord to redraw on page

        for (var i = 0; i < wordOnPage.secretWord.length; i++) {
            if (wordOnPage.secretWord[i] === userGuess) {
                wordOnPage.letters[i] = userGuess;
            }
        }

        updateWord();
    }
    else {
        //guess didn't match, decrement guesses left, and check for loss
        guessesLeft--;
        document.getElementById("guesses-left").textContent = guessesLeft;

        //check for loss
        if (guessesLeft === 0) {
            //end game
            document.getElementById("game-over").textContent = "Game over, man. Game Over. Press any key to start over."
        }
    }

    //add the most recent guess to the string lettersGuessed, write to page
    lettersGuessed.textContent += userGuess;

    //decrement guessesLeft and write to page
}
