// Step 6: Practical Applications and Code Challenges
// Objective: Apply array methods in real-world scenarios and solve coding challenges.
// Activities:
// Assign coding projects or tasks that require the use of various array methods.
// Provide coding challenges focusing on specific array operations and algorithms.
// Conduct code reviews to evaluate implementation, efficiency, and adherence to best practices.
// Criteria for Mastery:
// Successfully complete coding projects/tasks using array methods.
// Solve coding challenges involving array manipulation efficiently.
// Receive positive feedback in code reviews regarding implementation and best practices.

// reverse this array without using reverse()
const arrToReverse = ["first", "second", "third"];

function reverse(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  console.log(reversedArr);
}
reverse(arrToReverse);

// Check array for duplicates, and remove them if there
const duplicatesArr = ["apple", "banana", "cucumber", "apple"];

function removeDuplicates(removeFromArray) {
  let checkArr = [];
  for (let i = 0; i < removeFromArray.length; i++) {
    if (!checkArr.includes(removeFromArray[i])) {
      checkArr.push(removeFromArray[i]);
    }
  }
  console.log(checkArr);
}
removeDuplicates(duplicatesArr);
//increment through array
// create new array, and add removeFromArray[i] to that array, unless it includes(removeFromArray[i])
