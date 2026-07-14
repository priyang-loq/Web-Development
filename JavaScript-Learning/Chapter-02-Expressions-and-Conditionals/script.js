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