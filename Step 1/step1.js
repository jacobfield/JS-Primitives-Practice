// Objective: Understand basic array methods and their common use cases.
// Topics to cover:
// Introduction to basic array methods: push, pop, shift, unshift.
// Basic syntax and usage examples.
// Common scenarios for adding, removing, and modifying array elements.
// Criteria for Mastery:
// Can you explain the difference between push and unshift?
// How would you remove the last element from an array using pop?
// Provide an example scenario where you would use shift.

// .PUSH
const fruits = ["banana", "apple", "grape"];
// .push(array) adds the items between the brackets to the previous one
// console.log(`Fruits = ${fruits}`);
const newFruits = fruits.push("orange", "coconut");
// console.log(`Fruits = ${fruits}`);
// this adds to the previous array, rather than create a new one.

//.POP
// pop removes the last element from the array
const instruments = ["guitar", "drums", "bass", "drums"];
console.log(`Instruments = ${instruments}`);
const removeInstrument = instruments.pop();
console.log(`Instruments = ${instruments}`);

//.SHIFT
// Shift removes the first element from an array, and moves all elements up one index
const veg = ["potato", "chive", "carrot", "Pea"];
const shiftVeg = veg.shift();
console.log("veg = ", veg);

//.UNSHIFT
// Unshift adds one or more elements to the beginning of the array, and returns the new array's length
const cars = ["ford", "toyota", "hyundai"];
const unshiftCars = cars.unshift("Honda", "VW");
console.log(`cars = ${cars}`);
