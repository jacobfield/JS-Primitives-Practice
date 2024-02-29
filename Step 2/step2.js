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
// original array remains the same, but the new array has the callback function applied to each element in it

//Filter
// filter is used for creating a new array with the elements that satisfy a certain condition
// it returns a new array containing only the elements for which the callback function returns textUnderlinePosition:

const numArr = [1, 2, 3, 50, 100, 200, 300];
const filtNumArr = numArr.filter((number) => {
  return number >= 50;
});
console.log(`numArr = ${numArr}`);
console.log(`filtNumArr = ${filtNumArr}`);

// Imperitive Programming:
// Focuses on how to achieve a result, with step-by-step instructions
// Often involves mutable state and control flow
// Eg: Using loops and conditional statements to iterate over an array
//

// Declarative Style
// Focuses on what result is desired without specifying how to achieve it
// utilises higher-order functions and abstracts away implementation details
//EG: Using 'forEach', 'map' and 'filter' to express the desired outcome without explicitally detailing the iteration process.
