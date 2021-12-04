/* INSTRUCTIONS: 
Write a JavaScript function to get the HREF attribute of the link when you click the button
*/

// PLANNING:
// Create a function
// Target the html button with a variable
// Use the variable to get the HREF attribute


// FIRST ATTEMPT
// const getHREF = () => {
// 	const clickButton = document.getElementById("link");
// 	clickButton.getAttribute("href");
// };



// SECOND ATTEMPT
// Was confused by what the instructions wanted the function to do until sample solution was viewed
// Learned code was missing .innerHTML to make the P element show the hyperlink
const getHref = () => {
	const clickButton = document.getElementById("link").getAttribute("href");
	document.getElementById("p1").innerHTML = clickButton;
};
