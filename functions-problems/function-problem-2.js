/* INSTRUCTIONS: Challenge: Write a JavaScript function that accepts a string as a parameter 
and counts the number of vowels within the string.*/



//FIRST Attempt.
//I tested my function with just one vowel and saw that it worked. 

/* 
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
*/



//SECOND Attempt
//I originally had one array with all vowels, but saw that it wasn't working.
//I created a variable for each vowel afterwards. 
//I later learned that my problems were: missing let declaration and {} in the for loop, the if statement conditions were backwards, 
//and the return was supposed to be in the function, not in the loop. 


/* 
let myString = "This is my string example sentence.";

const findVowels = (userString) => {
  const vowelA = ["a"];
  const vowelE = ["e"];
  const vowelI = ["i"];
  const vowelO = ["o"];
  const vowelU = ["u"];
  let vowelCounter = 0
  
  userString = userString.toLowerCase()
  let splitString = userString.split("");
  //console.log(splitString);
  
   for (i = 0; i < splitString.length; i++)
    if (splitString[i].includes(vowelA)) {
      vowelCounter++
    } else if (splitString[i].includes(vowelE)) {
        vowelCounter++
    } else if (splitString[i].includes(vowelI)) {
        vowelCounter++
    } else if (splitString[i].includes(vowelO)) {
        vowelCounter++
    } else if (splitString[i].includes(vowelU)) {
        vowelCounter++
    }
    return vowelCounter
};

console.log(findVowels(myString)) 
*/


//THIRD Attempt
//I ditched the array because I thought that was the problem.
//I caught some of my syntax errors and fixed the function. 
//I remembered that a sentence could start with "I" and not work, so I changed the string to use the .toLowerCase method. 
//This prompted me to realize that I could equate the string to a lowercase vowel within the if statement. 
/*
const myFunction = userString => {
 
  userString = userString.toLowerCase()
  let splitString = userString.split("")
 
  let vowelCounter = 0
 
  for (i = 0; i < splitString.length; i++) {
    if (splitString[i] === "a") {
      vowelCounter++
    } else if (splitString[i] === "e"){
      vowelCounter++
    } else if (splitString[i] === "i") {
      vowelCounter++
    } else if (splitString[i] === "o") {
      vowelCounter++
    } else if (splitString[i] === "u") {
      vowelCounter++
    }
  }
  return vowelCounter
};

console.log(myFunction("Whatever I want to write."))
*/



//SECOND Attempt
//Took TJ's feedback to simplify the function by adding an array of vowels.

const myFunction = userString => {
 
  userString = userString.toLowerCase()
  let splitString = userString.split("");
  let vowelsArray = ["a", "e", "i", "o", "u"];
  let vowelCounter = 0;
 
  for (let i = 0; i < splitString.length; i++) {
    if (vowelsArray.includes(splitString[i])) {
      vowelCounter++
    }
  }
  return vowelCounter
};

console.log(myFunction("aa ee ii oo uu"))



//THIRD Attempt
//Changed function name to findVowelsFunc
//Declared lowerCaseString within function
//More accurately described variable splitString by naming it userArray
//Made vowelsArray a const


const = findVowelsFunc = userString => {
  let lowerCaseString = userString.toLowerCase()
  let userArray = lowerCaseString.split("");
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let vowelCounter = 0;
 
  for (let i = 0; i < userArray.length; i++) {
    if (vowelsArray.includes(userArray[i])) {
      vowelCounter++
    }
  }
  return vowelCounter
};

console.log(findVowelsFunc("aa ee ii oo uu"))