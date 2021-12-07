// INSTRUCTIONS: 
// Create an object with three items in it, then write a JavaScript function that accepts an object 
// and tells you the length (tells you how many items are in it) of the object.

/*
let car = {
	"Engine": "On",
	"Oil Level": "Low",
	"Check Engine Light": "On"
};

const objectLength = objectName => {
      return Object.keys(objectName).length
};

console.log(objectLength(car))
*/

// SECOND ATTEMPT
// Renamed keys to use camelCase
let car = {
	"engine": "On",
	"oilLevel": "Low",
	"checkEngineLight": "On"
};

const objectLength = objectName => {
      return Object.keys(objectName).length
};

console.log(objectLength(car))