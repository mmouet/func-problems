// INSTRUCTIONS 
// Define a function that takes in an array of elements and joins them together into a string.
// Do NOT use the "toString" method.

// PLANNING: 
// Create function and example array. 

let citiesArray = ["Tokyo", "London", "Paris", "Prague", "Chicago"];

const joinArray = arrayInput => {
	return arrayInput.join(", ")
};

console.log(joinArray(citiesArray));