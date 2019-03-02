# Word-Guess-Game

## Technologies used

This is my first project combining the use of:

* HTML
* CSS
* Bootstrap
* Javascript

---
The HTML skeleton is pretty minimal, with most of the action taking place in the JS file. The vast majority of the styling was done with Bootstrap 4, with only a little bit of custom CSS for tweaking. This let me create a site which works extremely well for mobile devices, while is perfect for a little game like this.

---

The JS logic runs the under the hood mechanics of the game itself by capturing key presses, checking for validity, updating the DOM, and restarting the game when a win or loss occurs (while keeping track of the total number of wins since the page loaded). The word to be guessed is pulled from a small dictionary array in the JS file; a more comprehensive version could pull from an online source.