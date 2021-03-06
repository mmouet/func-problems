// INSTRUCTIONS: Create an object, 
// then write a JavaScript function that checks whether an object contains the specified key.

// PLANNING: 
// Create object 
// Have a function take an input
// Check if the input matches the existing key 

/*
let car = {
	"Engine": "On",
	"Oil Level": "Low",
	"Check Engine Light": "On"
};


const checkKey = (objectName, keyName) => {
	if (objectName.hasOwnProperty([keyName]) ) {
		return true
	} else {
		return false
	};
};

console.log(checkKey(car, "Engine"))
*/


// SECOND ATTEMPT
// Renamed keys to use camelCase
/*
let car = {
	"engine": "On",
	"oilLevel": "Low",
	"checkEngineLight": "On"
};


const checkKey = (objectName, keyName) => {
	if (objectName.hasOwnProperty([keyName]) ) {
		return true
	} else {
		return false
	};
};

console.log(checkKey(car, "engine"))
*/

// THIRD ATTEMPT 
// Using TJ's feedback
// Removed unecessary if/else statement and reduced line to a single return statement
// Removed brackets from keyName


const checkKey = (objectName, keyName) => {
	return (objectName.hasOwnProperty(keyName)
};

console.log(checkKey(car, "engine"))