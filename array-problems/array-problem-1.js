// INSTRUCTIONS 
// Write a JavaScript function that takes in two parameters, an array and a number (n),
// and return the first n elements of that array.

// PLANNING: 
// Create a function and example array 
// Can loop through the array and turn n into an index? 
// Try n! math?
// Use slice method


let citiesArray = ["Tokyo", "London", "Paris", "Prague", "Chicago"];

const sliceArray = (array, n) => {
  array = array.slice(0, n);
  return array;
};

console.log(sliceArray(citiesArray, 2));
