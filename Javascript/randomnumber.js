function randomNumber(){
	var x = Math.floor(Math.random()*10+1);
	var guess = prompt("Guess the random number:");

	if(x === guess) {
		console.log("Good work!");
	}
	else {
		console.log("Not a match.");
		guess = prompt("Guess again.");
		}
	}
}

randomNumber();

