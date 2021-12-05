// INSTRUCTIONS: 
// Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
// Your JavaScript function should take in two parameters, the object and the key/property you want to delete.

// PLANNING: 
// Create an object
// Use delete method in function

let car = {
	"Oil Level": "full",
	"Engine": "off"
};

const removeObjectProp = (objectName, removeProp) => {
	delete objectName[removeProp];
	return objectName
};

console.log(removeObjectProp(car, "Oil Level"))