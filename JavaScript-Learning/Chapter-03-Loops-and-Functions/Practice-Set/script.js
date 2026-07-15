// Q1
/* let obj = {
    harsh: 97,
    hari: 98,
    hore: 99
}
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("the marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])
}
// Q2
for (let a in obj) {
    console.log("marks of " + a + " is " + obj[a])
} */
// Q3
let n = prompt("Enter a number");
n = Number.parseInt(n);

while (n !== 0) {
    console.log("Try Again");
    n = prompt("Enter a number again");
    n = Number.parseInt(n);
}

console.log("Correct!");
// Q4
function mean(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}

// Calling the function
let result = mean(10, 20, 30, 40, 50);

console.log("Mean =", result);