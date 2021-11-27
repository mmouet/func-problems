// INSTRUCTIONS
// Write a JavaScript function to add rows to the table when you click on the button. 

// PLANNING
// Create function 


// FIRST ATTEMPT
/*
const addRow = () => {
	const clickButton = document.getElementById("table1");
	clickButton.insertRow(0).innerHTML = "New Row"
};
*/


// SECOND ATTEMPT
// Rename variables
// Need to add a .insertCell method to give the rows table data 
// Remove .innerHTML from addRow variable so .innerHTML works on addCell variable
const addRow = () => {
	const table = document.getElementById("table1");
	const addRow = table.insertRow(0);
	const addCell1 = addRow.insertCell(0).innerHTML = "New Cell 1";
	const addCell2 = addRow.insertCell(1).innerHTML = "New Cell 2";

};