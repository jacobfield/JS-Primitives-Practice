// Step 3: Deep Dive into Intermediate Array Methods
// Objective: Gain a deeper understanding of intermediate array methods and their applications.
// Topics to cover:
// reduce:
// Advanced usage: accumulator, currentValue, initialValue.
// Use cases: data aggregation, calculating totals, flattening arrays.
// find:
// Searching arrays: finding the first element that satisfies a condition.
// Use cases: searching for specific items, retrieving object properties.
// findIndex:
// Searching arrays: finding the index of the first element that satisfies a condition.
// Use cases: finding the position of an item, validating array elements.
// Criteria for Mastery:
// Explain the role of the accumulator in reduce.
// Provide an example of using find to search for an object in an array.
// How does findIndex behave when the element is not found?

// REDUCE
// The reduce method transforms an array into a single value. The accumulator is a variable that stores the intermediate result and carries  it through the iteration. It accumulates the value as the iteration progresses, and the final result is obtained by applying a given function to the accumulator.
//
// The parameters in the callback function for 'reduce' are:
// 1) Accumulator: The accumulated result
// 2) currentValue: The current element being processed
// 3) Index: The index of the current element
// 4) Array: The array being traversed
const numbers1 = [1, 2, 3, 4, 5];
// reduce
const sum = numbers1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 // this '0' is the inital value for the accumulator
);
console.log(`Sum = ${sum}`);

// reduce takes in up to four parameters, and reduces an array into a single element. 1) Accumulator 2) currentValue 3) Index 4) Array. The result of the above is 15.
//

//FIND:
// the 'find' method retrieve the first element in an array that satisfies a given condition.
// Returns 'undefined' if not gound

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Jak" },
  { id: 3, name: "Bobbie" },
];
const user1 = users.find((user1) => user1.name === "Alice");
const user2 = users.find((user2) => user2.id === 2);
const user3 = users.find((user3) => user3.id === 3);
console.log(user1);
console.log(user2);
console.log(user3);

// FindIndex
// findIndex is used to search arrays. It returns the index of the first element that satisfies the given condition; if none is found, it returns -1.
//Use cases: Finding the position of an item & validating array elements
const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex((num) => num > 25);
console.log(`Index = ${index}`);
// array.findIndex(())
