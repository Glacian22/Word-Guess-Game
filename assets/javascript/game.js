var userGuess;
var guessesLeft = 10;
var wins = 0;
var needReset = false;
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

    //resets number of guesses available to ten and redraws
    guessesLeft = 10;
    document.getElementById("guesses-left").textContent = guessesLeft;

    //makes sure the text fields are cleared from prev game
    document.getElementById("game-over").textContent = "";
    document.getElementById("letters-guessed").textContent = "";

    //deactivates the reset flag
    needReset = false;
}

gameStart();

document.onkeyup = function (event) {

    userGuess = event.key;

    //check if the game should be restarted
    if (needReset) {
        gameStart();
    }

    //otherwise keep playing
    else {
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

            //check for victory condition, are there any _ remaining?
            if (wordOnPage.letters.indexOf("_") === -1) {
                document.getElementById("game-over").textContent = "YOU HAVE DEFEATED THE ALMIGHTY COMPUTER, CONGRATULATIONS MORTAL CREATURE. PRESS ANY KEY TO PLAY AGAIN";

                wins++;
                document.getElementById("win-text").textContent = "Wins: " + wins;
                needReset = true;
            }
        }
        else {
            //guess didn't match, decrement guesses left, and check for loss
            guessesLeft--;
            document.getElementById("guesses-left").textContent = guessesLeft;

            //check for loss
            if (guessesLeft === 0) {
                //end game
                document.getElementById("game-over").textContent = "Game over, man. Game Over. Press any key to start over.";

                //activates reset flag
                needReset = true;
            }
            //add the most recent guess to the string lettersGuessed, write to page, unless the player has already made that guess
            if (lettersGuessed.textContent.indexOf(userGuess) === -1) {
                //add a comma and space if there's something there already
                if (lettersGuessed.textContent.length > 0) {
                    lettersGuessed.textContent += ", ";
                }
                lettersGuessed.textContent += userGuess;
            }
        }

    }
}