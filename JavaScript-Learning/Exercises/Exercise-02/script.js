let random = Math.floor(Math.random() * 3);

let computerChoice;

if (random === 0) {
    computerChoice = "S";
} else if (random === 1) {
    computerChoice = "W";
} else {
    computerChoice = "G";
}

alert("Computer choice is:- " + computerChoice);

let userChoice = prompt("Enter S, G or W:");
userChoice = userChoice.toUpperCase();

if (userChoice !== "S" && userChoice !== "G" && userChoice !== "W") {
    alert("Enter a valid character");
} else {
    alert("User choice is: " + userChoice);
}

if (computerChoice === userChoice) {
    alert("It's a Draw!");
}

else if (
    (computerChoice === "S" && userChoice === "W") ||
    (computerChoice === "W" && userChoice === "G") ||
    (computerChoice === "G" && userChoice === "S")
) {
    alert("Computer Wins!");
}
else {
    alert("You Win!");
}