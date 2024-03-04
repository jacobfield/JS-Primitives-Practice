// Step 5: Exploring Functional Programming with Array Methods
// Objective: Understand functional programming concepts and their application in JavaScript.
// Topics to cover:
// Functional programming principles: immutability, pure functions, higher-order functions.
// Transforming data with array methods: using map, filter, reduce in functional programming style.
// Advantages of functional programming: code readability, maintainability, testability.
// Criteria for Mastery:
// Explain the concept of immutability and its importance in functional programming.
// How do higher-order functions differ from regular functions?
// Provide an example of using map to transform an array of objects.

//ARROW FUNCTION
// Syntax:
const functionName = (parameter1, parameter2) => {
  // Function body
  return parameter1 + parameter2;
  // Return statement if needed
};

// IMMUTABILITY
//Immutability is a key principle in functional programming that emphasises the importance of not modifying data once it has been created. Once defined, variables cannot be changed. Instead of modifying original ones, create new ones.
//Importance of Immutability:
// 1) Predictability - immutable data leads to more predictable code, since the values don't unexpectedly change
// 2)  Concurrency - Immutability simplifies handling concurrent operations, as there's no risk of data changing whilst it is being processed
// 3) Debugging - Debugging becomes easier since the state of data remains constant throughout the program

// HIGHER ORDER FUNCTIONS VS. REGULAR FUNCTIONS:
//HOF: Functions that take one or more functions as arguments, or return a function
// EG:

const multiplyBy = function (factor) {
  return function (num) {
    return num * factor;
  };
};
// written using arrow functions
const multiplicationExample = (factorToMultiplyBy) => (number) =>
  number * factorToMultiplyBy;

const double = multiplyBy(2);
console.log(double(5));
