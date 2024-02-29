// Step 2: Introduction to Iteration Methods
// Objective: Learn about array iteration methods and their importance.
// Topics to cover:Introduction to iteration methods: forEach, map, filter.
// Basic syntax and usage examples.
// Understanding the difference between imperative and declarative programming styles.
// Criteria for Mastery:
// Explain the purpose of the callback function in forEach.
// How is map different from forEach?
// When would you use filter instead of forEach?

// .forEach
// forEach method iterates over elements in an array
// Takes callback function as an argument, which is executed once for each array element
// this callback function defines the action to be taken for each element
const colours = ["red", "blue", "green"];
// console.log(colours);
colours[3] = "Black";
// console.log(colours);
colours.forEach((item, index) => {
  // index = element number
  // item = colour
  console.log(`${index}: ${item}`);
});

// Map
// Different to forEach, as map transforms each element of an array and creates a new array with the results
// It returns a new array, and leaves the original unchanges
// Also takes a callback function, and the return value of the callback function is used to create the new array

const numbers = [2, 4, 6, 8, 10];

const squaredNumbers = numbers.map((number) => {
  return number * number;
});
console.log(`numbers = ${numbers}`);
console.log(`squaredNumbers = ${squaredNumbers}`);