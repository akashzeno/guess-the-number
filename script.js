/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * DONE: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses

let guesses = [];

// Variable for store the correct random number

let correct_number = getRandomNumber();
console.log(correct_number);

window.onload = function () {
	document.getElementById("number-submit").addEventListener("click", playGame);
	document.getElementById("restart-game").addEventListener("click", initGame);
};

/**
 * Functionality for playing the whole game
 */
function playGame() {
	// *CODE GOES BELOW HERE *
	let number_guess = document.getElementById("number-guess").value;
	saveGuessHistory(number_guess);
	display_result(number_guess);
	displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement
 */
// *CODE GOES BELOW HERE *
function display_result(number_guess) {
	if (number_guess > correct_number) {
		showNumberAbove();
		console.log("Guess is too high");
	} else if (number_guess < correct_number) {
		showNumberBelow();
		console.log("Guess in too low");
	} else {
		showYouWon();
		console.log("Congratulations your guess is correct");
	}
}
/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
	// *CODE GOES BELOW HERE *
	guesses = [];
	correct_number = getRandomNumber();
	document.getElementById("history").innerHTML = "";
	document.getElementById("result").innerHTML = "";
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
	document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random
 */
function getRandomNumber() {
	// *CODE GOES BELOW HERE *
	let correct_number = Math.floor(Math.random() * 101);
	return correct_number;
}

/**
 * Save guess history
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
	// *CODE GOES BELOW HERE *

	guesses.push(guess);
	console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
	//let index; // TODO
	// I have done it with for loop so no need of index variable
	let list_items = "";

	let guesses_reversed = guesses.slice();

	let list = "<ul class='list-group'>";

	// *CODE GOES BELOW HERE *
	for (let num of guesses_reversed.reverse()) {
		list_items += "<li class='list-group-item'> You guessed " + num + " </li>";
	}

	console.log(guesses_reversed);
	list += list_items + "</ul>";
	console.log(list);
	document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
	let dialog;
	switch (dialogType) {
		case "warning":
			dialog = "<div class='alert alert-warning' role='alert'>";
			break;
		case "won":
			dialog = "<div class='alert alert-success' role='alert'>";
			break;
	}
	dialog += text;
	dialog += "</div>";
	return dialog;
}

function showYouWon() {
	const text = "Awesome job, you got it!";
	/**
	 * Retrieve the dialog using the getDialog() function
	 * and save it to variable called dialog
	 * HINT: Use the 'won' and text parameters
	 */
	// *CODE GOES BELOW HERE *
	let dialog = getDialog("won", text);
	document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
	const text = "Your guess is too high!";
	/**
	 * Retrieve the dialog using the getDialog() function
	 * and save it to variable called dialog
	 * HINT: Use the 'warning' and text parameters
	 */
	// *CODE GOES BELOW HERE *
	document.getElementById("result").innerHTML = getDialog("warning", text);
}

function showNumberBelow() {
	const text = "Your guess is too low!";
	/**
	 * Retrieve the dialog using the getDialog() function
	 * and save it to variable called dialog
	 * HINT: Use the 'warning' and text parameters
	 */
	// *CODE GOES BELOW HERE *
	document.getElementById("result").innerHTML = getDialog("warning", text);
}
