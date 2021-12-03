// INSTRUCTIONS 
// Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).
// Do NOT use the Set method.

// PLANNING: 
// Create function and example arrays.
// Remove elements from original array or create new array? 
// Turn elements to lowercase. 
// Turn array into string and then back into an array? 


let numArray = [1,2,2,3,3,3,4,5,5,];
let citiesArray = ["Tokyo", "Tokyo", "CHICAGO", "Prague", "Chicago", "CHICAGO"];

const removeDup = arrayInput => {
  if (typeof arrayInput[0] != 'number') {
	const newStr = arrayInput.toString();
	const lowerCaseStr = newStr.toLowerCase();
	const lowerCaseArray = lowerCaseStr.split(",")
  
    let newArray = []
    
	for (let i = 0; i < lowerCaseArray.length; i++) {
		if (!newArray.includes(lowerCaseArray[i])) {
			newArray.push(lowerCaseArray[i])
		}
	};
  return newArray
  } else {
    let newArray = []
    
	for (let i = 0; i < arrayInput.length; i++) {
		if (!newArray.includes(arrayInput[i])) {
			newArray.push(arrayInput[i])
		}
	};
  return newArray
  }
};

console.log(removeDup(numArray));
console.log(removeDup(citiesArray));