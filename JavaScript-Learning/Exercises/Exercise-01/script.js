let random = Math.floor(Math.random() * 100) + 1;

// For testing only (remove this later)
// alert("Random Number = " + random);

let guess = Number(prompt("Enter a number between 1 and 100:"));
let guesses = 1;

while (guess !== random) {
    if (guess > random) {
        alert("Your guess is too high! Enter a smaller number.");
    } else {
        alert("Your guess is too low! Enter a larger number.");
    }

    guess = Number(prompt("Try Again:"));
    guesses++;
}

alert("🎉 Congratulations! You guessed the correct number.");
alert("Number of guesses: " + guesses);
alert("Your Score: " + (100 - guesses));