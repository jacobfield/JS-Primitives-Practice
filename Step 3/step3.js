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
const numbers = [1, 2, 3, 4, 5];
// reduce
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 // this '0' is the inital value for the accumulator
);
console.log(sum);

// reduce takes in up to four parameters, and reduces an array into a single element. 1) Accumulator 2) currentValue 3) Index 4) Array. The result of the above is 15.
//
