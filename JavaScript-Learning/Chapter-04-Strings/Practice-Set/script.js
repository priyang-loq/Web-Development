// Q2
let str = "Code With Harry";

console.log(str.includes("With"));     // true
console.log(str.includes("Java"));     // false

console.log(str.startsWith("Code"));   // true
console.log(str.startsWith("With"));   // false

console.log(str.endsWith("Harry"));    // true
console.log(str.endsWith("Code"));     // false

// Q3
console.log(str.toLowerCase())

//Q4
let str2 = "THE PRICE IS 15500"
let num = Number.parseInt(str2.slice(12))
console.log(num)