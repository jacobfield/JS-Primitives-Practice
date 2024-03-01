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
