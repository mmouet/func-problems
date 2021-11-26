// INSTRUCTIONS
// Write a JavaScript function to add rows to the table when you click on the button. 

// PLANNING
// 



const addRow = () => {
	const clickButton = document.getElementById("table1");
	clickButton.insertRow(0).innerHTML = "New Row"
};