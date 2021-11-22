/* INSTRUCTIONS: Write a JavaScript function that accepts two arguments, 
a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
*/

//FIRST Attempt
//After reviewing the solution for the previous problem, I saw that this one was exteremely similar. 
//All it needed was another input for the user. 
/*
const checkForLetter = (userString, userLetter) => {
  userString = userString.toLowerCase();
  userLetter = userLetter.toLowerCase();
 
  let letterCounter = 0;
 
  for (let i = 0; i < userString.length; i++)
    if (userLetter.includes(userString[i])) {
      letterCounter++
    }
  return letterCounter
};

console.log(checkForLetter("seven seven seven", "v"));
*/


//SECOND Attempt
//Included new variable names to be declared. 

const checkForLetter = (userString, userLetter) => {
  let lowerCaseString = userString.toLowerCase();
  let lowerCaseLetter = userLetter.toLowerCase();
  let letterCounter = 0;
 
  for (let i = 0; i < userString.length; i++)
    if (lowerCaseLetter.includes(lowerCaseString[i])) {
      letterCounter++
    }
  return letterCounter
};

console.log(checkForLetter("SEVEN seven seven", "v"));