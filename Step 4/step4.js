// Step 4: Introduction to Advanced Array Methods
// Objective: Explore advanced array methods and their functionalities.
// Topics to cover:
// some and every:
// Checking arrays: validating array elements based on a condition.
// Use cases: checking for existence, validating array contents.
// slice:
// Extracting arrays: creating a shallow copy of a portion of an array.
// Use cases: extracting subsets, pagination.
// splice:
// Modifying arrays: changing the contents of an array by removing or replacing existing elements.
// Use cases: adding, removing, or replacing specific items.
// Criteria for Mastery:
// Explain the difference between some and every.
// Provide an example scenario where you would use slice.
// When would you use splice instead of slice?

//SOME
// The 'some' method checks if at least one element in the array satisfies a given condition. It returns 'true' is at least one element passes the condition, otherwise returns false.
const numbers = [1, 2, 3, 4, 5];
// checking if some numbers are even
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);
// returns 'true', as conditions are met

//EVERY
// Every is similar to 'some', but checks that all elemments satisfy that condition

const evenNumbers = [2, 4, 6, 8, 10];
const allEven = evenNumbers.every((num) => num % 2 === 0);
console.log(`Are they all even? ${allEven}`);
// will return true.

//SLICE
// Slice method creats a shallow copy of a portion of an array. takes two parameters, the starting index and the ending index, and returns a new array containing elements from the original array within that range.

// slice essentially extracts a portion of the array, between the two indexes inputted as parameters.
const fruits = [
  "apple",
  "banana",
  "coconut",
  "grape",
  "melon",
  "watermelon",
  "kiwi",
];
const fruitSubset = fruits.slice(1, 4);
console.log(`New Fruits = ${fruitSubset}`);

// SPLICE
// splice method modifys the contents of an array by adding, removing, or replacing existing elements.
// Takes 3 parameters, the starting index, the number of elements to remove, and optional elements to add
const spliceNums = [1, 2, 3, 4, 5];
spliceNums.splice(2, 1, 100);
console.log(`spliced num array = ${spliceNums}`);
// this will start at index 2, remove 1 element, and insert '100' in its place

// Difference between some and every: Some returns true is at least one element satisfies the condition, or returns false. Every requires every element to satisfy the condition, else returns false

// Example scenario for 'slice': If you requiure a certain range of indexes from an array, slice allows you to extract those elements and create a new array using the extracted data

//
//When to use 'splice' instead of 'slice': splice is for when you need to edit information inside of an array, slice is when you want to make a copy of a certain section of an array.
