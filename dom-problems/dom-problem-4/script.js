// INSTRUCTIONS
// Write a JavaScript function that displays the number of items 
// and displays the item in the list when you click that button.


// PLANNING 
// 1. Use JS pop up 
// 2. Use JS get options from select
// 3. Use a for loop to put text values into an array, then turn array into string to display in pop up
// 4. Show selected item from the dropdown list

const displayItems = () => {
	const numOfItems = document.getElementById("fruits").options.length;
	const fruitList = document.getElementById("fruits");
	const selectedItem = document.getElementById("fruits").value;
	
	let allFruits = "";

	for (let i = 0; i < fruitList.length; i++) {
		allFruits = allFruits + fruitList.options[i].text + ", ";
	};

	const alertMessage = "Of our " + numOfItems + " items: " + allFruits + "you selected the " + selectedItem
	
	window.alert(alertMessage);
};