// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

myFunction = () => {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

nestedFunction = () => {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/* internal is accessible by nested function bc of scope block the inner nested scope block allow variables closure to those functions.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const sumation = (param) => {
  let result = 0;
  for (let counter = 0; counter <= param; counter++) {
    result = result + counter;
  }
  return result;
}
console.log('summation ' + sumation(4));