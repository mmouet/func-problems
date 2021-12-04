/* INSTRUCTIONS: Write a JavaScript function that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers that are multiples of both three and five print "FizzBuzz". */


//FIRST Attempt
//I made a smaller variation of the function that would run through 10 because I didn't want to scroll through 100 numbers in the console.
//I tested the if statement to see if it would work on multiples of 3 before replicating it for the else if statements. 

/*
const myFunction = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i)
    if (i % 3 === 0) {
      console.log("Fizz")
    }
  }
};

console.log(myFunction())
*/



//SECOND Attempt
//I changed the loop to end at 25 to test for multiples of 3 and 5.
//I added the other else if statements. 

/* 
const myFunction = () => {
    for (let i = 0; i <= 25; i++) {
      console.log(i)
      if (i % 3 + i % 5 === 0) {
        console.log("FizzBuzz")
      } else if (i % 3 === 0) {
        console.log("Fizz")
      } else if (i % 5 === 0) {
        console.log("Buzz")
      }
    }
  };
  
  console.log(myFunction())
*/


//THIRD Attempt
//I looked at the example solution and saw that I missed the instruction to begin the loop at 1, so I changed the loop starting point. 
//I renamed the function to more accurately reflect it. 
/*
const fizzBuzzFunc = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 + i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    }
  }
};

console.log(fizzBuzzFunc())
*/


//FOURTH Attempt
//Changed ++ in the "FizzBuzz" if statement to include &&.
const fizzBuzzFunc = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
};

fizzBuzzFunc();