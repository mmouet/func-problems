/* 
Challenge: Write a JavaScript function that accepts a string as a parameter 
and counts the number of vowels within the string.
*/

let myString = "This is my string example sentence.";

const findVowels = (userString) => {
  const vowelsArray = ["i"];
  let vowelCounter = 0
  
  let splitString = userString.split("");
  //console.log(splitString);
  
   for (i = 0; i < splitString.length; i++)
    if (splitString[i].includes(vowelsArray)) {
      vowelCounter++
    }
    return vowelCounter
};

console.log(findVowels(myString))