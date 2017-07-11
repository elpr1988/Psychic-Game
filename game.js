var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
			   "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var lettersGuessed = [];
var i = 0;

	// Returns a random letter and shows in console
	var randomLetter = letters[Math.floor(Math.random()* letters.length)];
	console.log(randomLetter);

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// Adds the lettersGuessed to the empty array and shows on html					
		lettersGuessed.push(userGuess);
		document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

		// if the userGuess is not the randomLetter the remainingGuesses decriments
		if(userGuess != randomLetter) {
			remainingGuesses--;
			// updates the remainingGuesses in html
			var counter = document.getElementById("remainingGuesses");
			counter.innerHTML = "Guesses Left: " + remainingGuesses;

		} else { 
		// if userGuess is equal to randomLetter, wins increment
			wins++;
			// updates the wins to the html
			var winner = document.getElementById("wins");
			winner.innerHTML = "Wins: " + wins;
			// function to resetGame
			resetGame();
		}
		// if user runs out of guesses, losses increment 
		if(remainingGuesses==0){
			losses++;
			// losses gets updated to the html
			var lose = document.getElementById("losses");
			lose.innerHTML = "Losses: " + losses;
			// function to resetGame
			resetGame();
		}

			//Resets remainingGuesses and generates a new random letter
			function resetGame(){
				//resets all except wins and losses
				randomLetter = letters[Math.floor(Math.random()* letters.length)];
				console.log(randomLetter); 
				lettersGuessed=[];
				remainingGuesses= 10;
				var counter = document.getElementById("remainingGuesses");
				counter.innerHTML = "Guesses Left: " + remainingGuesses;
			}
	};
