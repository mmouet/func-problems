// INSTRUCTIONS: 
// Create an array of people objects with first name, last name, and age, 
// then write a JavaScript function that takes in an array 
// and console logs the first and last names of all the people.

// PLANNING: 
// Create array.
// Have function use a for loop to iterate through each object.

let roster = [
	{
		firstName: "Alice",
		lastName: "Alvarez",
		age: 26
	},
	{
		firstName: "Bob",
		lastName: "Banks",
		age: 54
	},
	{
		firstName: "Camilla",
		lastName: "Chen",
		age: 32
	},
	{
		firstName: "Darin",
		lastName: "Dominguez",
		age: 34
	},
];

const printNames = arrayOfObjects => {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    console.log(arrayOfObjects[i].firstName + " " + arrayOfObjects[i].lastName)
  }
};

printNames(roster);