// let arr = [1, 2, 3, 4]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// Array Methods
// let r = arr.toString()

// let r = arr.join("and")

// let r = arr.pop()

// let r = arr.push(6)

// let r = arr.shift()

// let r = arr.unshift(7)

// console.log(r)
// ==============================
// JavaScript Array Methods
// Uncomment one section at a time
// ==============================

// let arr = [10, 20, 30, 40, 50];

// console.log("Original Array:", arr);

// ==================================
// 1. delete
// Removes the value but NOT the index
// ==================================

// delete arr[2];
// console.log("After delete:", arr);
// console.log("Length:", arr.length);

// Output:
// [10, 20, <empty>, 40, 50]
// Length: 5



// ==================================
// 2. concat()
// Combines two or more arrays
// ==================================

// let arr2 = [60, 70];
// let arr3 = [80, 90];
// let result = arr.concat(arr2, arr3);
// console.log("Original:", arr);
// console.log("Concatenated:", result);



// ==================================
// 3. sort()
// Sorts alphabetically by default
// ==================================

// let nums = [5, 12, 1, 20, 8];

// // Default Sort
// console.log(nums.sort());

// // Ascending Order
// nums = [5, 12, 1, 20, 8];
// nums.sort((a, b) => a - b);
// console.log("Ascending:", nums);

// // Descending Order
// nums = [5, 12, 1, 20, 8];
// nums.sort((a, b) => b - a);
// console.log("Descending:", nums);



// ==================================
// 4. splice()
// Changes the original array
// Syntax: splice(start, deleteCount, items...)
// ==================================

// // Remove elements
// let nums = [10, 20, 30, 40, 50];
// nums.splice(2, 2);
// console.log(nums);

// // Insert elements
// nums = [10, 20, 30, 40, 50];
// nums.splice(2, 0, 25, 27);
// console.log(nums);

// // Replace elements
// nums = [10, 20, 30, 40, 50];
// nums.splice(2, 2, 100, 200);
// console.log(nums);



// ==================================
// 5. slice()
// Does NOT modify the original array
// Syntax: slice(start, end)
// ==================================

// let part = arr.slice(1, 4);
// console.log("Original:", arr);
// console.log("Sliced:", part);



// ==================================
// 6. reverse()
// Reverses the original array
// ==================================

// arr.reverse();
// console.log("Reversed:", arr);
// arr.forEach((element) => {
//     console.log(element * element)
// })
// // array form
// let name = "PRIYANG"
// let string = Array.from(name)
// console.log(string)

// =====================================
// JavaScript Array Methods
// map(), filter(), reduce()
// Uncomment one section at a time
// =====================================

let arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

// =====================================
// 1. map()
// Creates a new array by modifying
// every element.
// =====================================

// let result = arr.map(function(value) {
//     return value * 2;
// });

// console.log("Original:", arr);
// console.log("Mapped:", result);

// Output:
// Original: [1, 2, 3, 4, 5]
// Mapped: [2, 4, 6, 8, 10]



// =====================================
// 2. filter()
// Returns only those elements that
// satisfy the condition.
// =====================================

// let result = arr.filter(function(value) {
//     return value % 2 === 0;
// });

// console.log("Original:", arr);
// console.log("Even Numbers:", result);

// Output:
// Original: [1, 2, 3, 4, 5]
// Even Numbers: [2, 4]



// =====================================
// 3. reduce()
// Reduces the array to a single value.
// Syntax:
// array.reduce(function(accumulator, currentValue) {
//     return accumulator;
// }, initialValue);
// =====================================

// let sum = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log("Original:", arr);
// console.log("Sum:", sum);

// Output:
// Original: [1, 2, 3, 4, 5]
// Sum: 15