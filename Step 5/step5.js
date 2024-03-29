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
// will return 10

//REGULAR FUNCTION:
function add(a, b) {
  return a + b;
}
console.log(add(3, 6)); // will return 9

// EZAMPLE OF 'MAP' TO TRANSFORM AN ARRAY OF OBJECTS:
// scenario: transform an array of objects representing people into an array of their names
const people = [
  { id: 1, name: "Jacob" },
  { id: 2, name: "Mollie" },
  { id: 3, name: "Nicola" },
  { id: 4, name: "Camille" },
];
// mapping through array, creating new array by applying the method to it
const names = people.map((person) => person.name);
console.log(names);

// Advantages of Functional Programming:
// 1) Code readability: - emphasises declarative and expressive code, making it easier to understand and maintain
// 2) Maintainability: Immutability reduces the chance of unexpected side effects, making it easier to maintain and extend code.
// 3) Testability: Functions with no side effects are easier to test, since their behaviour is determined by their input only.

// Functional programming provides a paradigm that promotes cleaner, more modular, and easily testable code. Understanding and applying these principles can lead to more robust and scalable JS apps.
