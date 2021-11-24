/* 
INSTRUCTIONS: 
Create a basic HTML page with a P element and a button on it.

Then, write a JavaScript function to set the background color 
of that paragraph using an "onclick" event added to a button in the UI.
*/



// Before Starting Thought Process: 

// Create a function 
// Declare button variable 
// Create a condition that changes the background color when clicked by
// Either assigning the paragraph a new class with a red background
// Or changing the background of the existing class directly


// Working Through The Problem: 

// Tried using .getElementByClassName, but it didn't work
// Made the function target the id of the HTML element



//First Attempt
/*
const changePBackground = () => {
	const clickButton = document.getElementByClassName("p1")
	clickButton.style.backgroundColor = "red"
};
*/



//Second Attempt 
const changePBackground = () => {
	const clickButton = document.getElementById("p1")
	clickButton.style.backgroundColor = "red"
};