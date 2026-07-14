// ===============================
// JavaScript Operators
// ===============================

// Variables
let a = 10;
let b = 5;

console.log("Value of a =", a);
console.log("Value of b =", b);

// ===============================
// 1. Arithmetic Operators
// ===============================

console.log("\n=== Arithmetic Operators ===");

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

let c = 10;
console.log("c =", c);
console.log("c++ =", c++);
console.log("After c++ =", c);

console.log("++c =", ++c);

console.log("c-- =", c--);
console.log("After c-- =", c);

console.log("--c =", --c);

// ===============================
// 2. Assignment Operators
// ===============================

console.log("\n=== Assignment Operators ===");

let x = 20;

console.log("Initial x =", x);

x += 5;
console.log("x += 5 :", x);

x -= 3;
console.log("x -= 3 :", x);

x *= 2;
console.log("x *= 2 :", x);

x /= 4;
console.log("x /= 4 :", x);

x %= 3;
console.log("x %= 3 :", x);

x **= 2;
console.log("x **= 2 :", x);

// ===============================
// 3. Comparison Operators
// ===============================

console.log("\n=== Comparison Operators ===");

console.log("a == b :", a == b);
console.log("a != b :", a != b);
console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a >= b :", a >= b);
console.log("a <= b :", a <= b);

console.log("10 == '10' :", 10 == "10");
console.log("10 === '10' :", 10 === "10");
console.log("10 !== '10' :", 10 !== "10");

// ===============================
// 4. Logical Operators
// ===============================

console.log("\n=== Logical Operators ===");

let p = true;
let q = false;

console.log("p && q =", p && q);
console.log("p || q =", p || q);
console.log("!p =", !p);
console.log("!q =", !q);

// =====================================
// Conditional Statements in JavaScript
// =====================================

let age = 20;
let day = 3;
let marks = 85;

// =====================================
// 1. if Statement
// =====================================

console.log("=== if Statement ===");

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// =====================================
// 2. if-else Statement
// =====================================

console.log("\n=== if-else Statement ===");

if (marks >= 40) {
    console.log("You Passed.");
} else {
    console.log("You Failed.");
}

// =====================================
// 3. if-else if Ladder
// =====================================

console.log("\n=== if-else if Ladder ===");

if (marks >= 90) {
    console.log("Grade: O");
} else if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B+");
} else if (marks >= 40) {
    console.log("Grade: B");
} else {
    console.log("Fail");
}

// =====================================
// 4. Switch Case
// =====================================

console.log("\n=== Switch Case ===");

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// =====================================
// 5. Ternary Operator
// =====================================

console.log("\n=== Ternary Operator ===");

let result = (age >= 18) ? "Adult" : "Minor";

console.log(result);