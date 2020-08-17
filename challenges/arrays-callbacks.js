// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* Request 1: .forEach()

The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const displayNames = [];
  let count = 0;
  zooAnimals.forEach((e) =>{
    // Adds the obj properties
    displayNames[count] = `Name: ${e.animal_name} Scientific: ${e.scientific_name}.`;
    ++count;
});
  
console.log('Request 1 - Array callbacks');
displayNames.forEach(e => console.log(e));

/* Request 2: .map()

The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.

*/
let lowCaseAnimalNames = [];
lowCaseAnimalNames = zooAnimals.map((e)=>{
  // returns lowercaseAnimalNames
  return e.animal_name.toLowerCase();
});
console.log('Request 2');
for(let i = 0; i < lowCaseAnimalNames.length; i++){
  //prints lowCaseAnimalNames
  console.log(lowCaseAnimalNames[i]);
}
/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.

*/
let lowPopulationAnimals = [];
lowPopulationAnimals = zooAnimals.filter(e => e.population <= 5);
console.log('Request 3')
for(let i in lowPopulationAnimals){
  // All lowPopulationAnimals
  console.log(lowPopulationAnimals[i].animal_name);
}
/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.

*/
let populationTotal = 0;
// Reducer Array
const subtractor = (additional, currentPopulation) => additional + currentPopulation;
/*Array obj additional
let initialPopulation = 0
let sum = [{x: 1},{x: 2}, {x: 3}].reduce(function (additional, currentPopulation) {
  return additional + currentPopulation.x
}, initialPopulation)
console.log(sum) // logs 6
*/
//Population Array
let populationArr = [];
for(let i = 0; i < zooAnimals.length; i++){
  // Make a population array to use with subtractor 
  populationArr.push(zooAnimals[i].population);
}
for(let i = 0; i < zooAnimals.length; i++){
  // PopulationArr added 
  console.log('Request 4 Total Population: '+populationArr.reduce(subtractor));
}

// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
add = (a,b) => {

  return a+b;
}
 multiply=(a,b)=>{

  return a*b;
}
 greeting=(a,b)=>{

  return `Hello ${a} ${b}, nice to meet you!`;
}


 consume=(a,b,cb)=>{

   return  cb(a,b);
   
  }
  //console.log(consume(3,3,cconsume()));
console.log('Consume callback functions ');

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4 
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!




/*

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

