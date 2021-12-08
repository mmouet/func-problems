// INSTRUCTIONS 
// Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).
// Do NOT use the Set method.

// PLANNING: 
// Create function and example arrays.
// Remove elements from original array or create new array? 
// Turn elements to lowercase. 
// Turn array into string and then back into an array? 


// ATTEMPT 1	
/*
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
*/


// TJ revision 
// Only need to declare 'newArray' once at the top since both conditionals use it
// Only need to 'return' once at bottom since both conditional return the same 
// Can chain multiple methods together instead of calling them individually

/*
let numArray = [1,2,2,3,3,3,4,5,5,];
let citiesArray = ["Tokyo", "Tokyo", 15, "CHICAGO", "Prague", "Chicago", "CHICAGO", 1];

const removeDup = arrayInput => {
    let newArray = []
    if (typeof arrayInput[0] != 'number') {
        const lowerCaseArrayOfNumbers = arrayInput.toString().toLowerCase().split(","); 
    
       for (let i = 0; i < lowerCaseArrayOfNumbers.length; i++) {
          if (!newArray.includes(lowerCaseArrayOfNumbers[i])) {
             newArray.push(lowerCaseArrayOfNumbers[i])
          }
       };
    } else {    
        for (let i = 0; i < arrayInput.length; i++) {
            if (!newArray.includes(arrayInput[i])) {
                newArray.push(arrayInput[i])
            }
       };
    }
  return newArray
};

console.log(removeDup(numArray)); // [1, 2, 3, 4, 5]
console.log(removeDup(citiesArray)); // ["tokyo", "chicago", "prague"]

*/ 



// THIRD ATTEMPT
// Include a for loop to fix the first if statement 
// Use include method to iterate through the array and check if it's a number

// Tried using .indexOf method
// Changed the numbers into strings
/*
let numArray = [1,2,2,3,3,3,4,5,5,];
let citiesArray = ["Tokyo", "Tokyo", 15, "CHICAGO", "Prague", "Chicago", "CHICAGO", 1];

const removeDup = arrayInput => {
    let newArray = []

    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput.indexOf('string')){
            let lowerCaseArrayOfNumbers = arrayInput.toString().toLowerCase().split(","); 
            for (let i = 0; i < lowerCaseArrayOfNumbers.length; i++) {
                if (!newArray.includes(lowerCaseArrayOfNumbers[i])) {
                    newArray.push(lowerCaseArrayOfNumbers[i])
                };
            };
        };
    };
  return newArray
};

console.log(removeDup(numArray)); // logs ["1", "2", "3", "4", "5"]
console.log(removeDup(citiesArray)); // logs ["tokyo", "15", "chicago", "prague", "1"]
*/


// Tried using typeof 
// Changed numbers into strings
/*
let numArray = [1,2,2,3,3,3,4,5,5,];
let citiesArray = ["Tokyo", "Tokyo", 15, "CHICAGO", "Prague", "Chicago", "CHICAGO", 1];

const removeDup = arrayInput => {
    let newArray = []

    for (let i = 0; i < arrayInput.length; i++) {
        if (typeof arrayInput[i] === "string"){
            let lowerCaseArrayOfNumbers = arrayInput.toString().toLowerCase().split(","); 
            for (let i = 0; i < lowerCaseArrayOfNumbers.length; i++) {
                if (!newArray.includes(lowerCaseArrayOfNumbers[i])) {
                    newArray.push(lowerCaseArrayOfNumbers[i])
                };
            };
        } else {    
            for (let i = 0; i < arrayInput.length; i++) {
                if (!newArray.includes(arrayInput[i])) {
                    newArray.push(arrayInput[i])
            }
        };
      };
    };
  return newArray
};
console.log(removeDup(numArray)); // logs [1, 2, 3, 4, 5]
console.log(removeDup(citiesArray)); // logs ["tokyo", "15", "chicago", "prague", "1", 

let numArray = [1,2,2,3,3,3,4,5,5,];
let citiesArray = ["Tokyo", "Tokyo", 15, "CHICAGO", "Prague", "Chicago", "CHICAGO", 1];
*/


// Tried using .includes() method
// Array elements retained their data types, but the function did not remove the duplicates.
/*
const removeDup = arrayInput => {
    let newArray = []

    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput.includes(typeof arrayInput[i] === 'string')){
            const lowerCaseArrayOfNumbers = arrayInput.toString().toLowerCase().split(","); 
            for (let i = 0; i < lowerCaseArrayOfNumbers.length; i++) {
                if (!newArray.includes(lowerCaseArrayOfNumbers[i])) {
                    newArray.push(lowerCaseArrayOfNumbers[i])
                };
            };
        } else {
            for (let i = 0; i < arrayInput.length; i++) {
                if (!newArray.includes(arrayInput[i])) {
                    newArray.push(arrayInput[i])
                };
            };
        };
    };
  return newArray
};

console.log(removeDup(numArray)); // logs [1, 2, 3, 4, 5]
console.log(removeDup(citiesArray)); // logs ["Tokyo", 15, "CHICAGO", "Prague", "Chicago", 1]
*/



// FOURTH ATTEMPT
let numArray = [1,2,2,3,3,3,4,5,5,];

const removeDup = arrayInput => {
    let newArray = [] 
    for (let i = 0; i < arrayInput.length; i++) {
        if (!newArray.includes(arrayInput[i])) {
                newArray.push(arrayInput[i])
        }
    };
  return newArray
};

console.log(removeDup(numArray)); // logs [1, 2, 3, 4, 5]
