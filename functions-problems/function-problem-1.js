/* INSTRUCTIONS: Challenge: Write a JavaScript function that accepts a string as a parameter 
and find the longest word within the string. */

//I felt so out of practice that I had to immediately look at the solution. 

let myString = "This is my string example sentence";

const findLongestWord = userString => {
  let splitString = userString.split(" ");
  let compareString = "";
  
  for (let i = 0; i < splitString.length; i++) {
      if (splitString[i].length > compareString.length) {
        compareString = splitString[i]
      }
  }
  return compareString
};

console.log(findLongestWord(myString));