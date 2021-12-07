// INSTRUCTIONS
// Write a JavaScript function to calculate the factorial of a number.

// PLANNING: 
// Use for loop to iterate through each number and multiple itself


// Without recursion
const calcFactorial = n => {
let sum = 1
	for (let i = 1; i <= n; i++) {
		sum *= i
	};
	return sum
};
console.log(calcFactorial(5))


// Function using recursion
const recursionFact = n => {
	if (n === 1) {
		return 1
	} else {
		return n * recursionFact(n-1)
	}
};

console.log(recursionFact(5))