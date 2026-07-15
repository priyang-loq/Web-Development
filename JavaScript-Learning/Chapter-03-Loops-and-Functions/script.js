// For-in Loops
let obj = {
    rohon : 45,
    rahul : 46,
    pratiksha : 50,
    priyang : -99
}
for (let a in obj){
    console.log("Marks of "+ a + " are " + obj[a])
}
// for-of loops
for (let b of "Priyang"){
    console.log(b)
}
// While and Do-While Loops
// =====================================
// User Input using prompt()
// =====================================

let input = prompt("Enter a number:");

// Convert string to number
let num = parseInt(input);

console.log("You entered:", num);

// =====================================
// While Loop
// =====================================

console.log("\n=== While Loop ===");

let i = 1;

while (i <= num) {
    console.log(i);
    i++;
}

// =====================================
// Do While Loop
// =====================================

console.log("\n=== Do While Loop ===");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= num);