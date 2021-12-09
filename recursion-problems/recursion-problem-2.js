// INSTRUCTIONS
// Write a JavaScript function to compute the sum of an array of integers.

// PLANNING: 
// Use for loop to iterate array and add each element

// Without recursion
const arr = [1,2,3,4,5,6,7,8,9,10]
const sumArray = x => {
	let sum = 0
	for (let i = 0; i <= x.length; i++) {
		sum += i
	};
	return sum
};
console.log(sumArray(arr))


// Function with recursion
const arr = [1,2,3,4,5,6,7,8,9,10]

const recursionSum = x => {
	if (x.length === 0) {
    return 0
	} else {
    return x[0] + recursionSum(x.slice(1)) 
	};
};

console.log(recursionSum(arr))