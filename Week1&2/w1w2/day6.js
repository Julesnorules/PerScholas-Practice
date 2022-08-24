// Write a function named planetHasWaterusing the function expression syntax.
// It will have one parameter: planet.
// Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!
// const planetHasWater = (planet) => {
// }

// const planetbeing = 'Earth', 'MARS', etc.);

// const planetHasWater = (planet) => {
//     if (planet === "Earth" || planet === "Mars"){
//         return true
//     } else {
//         return false
//     }
// }  

// console.log(planetHasWater("Neptune"))

// let sum = [];
// const addList = (7, 4, 9, 21) => {
//     (let i = 0; i < addList.length; i++){

//     }
// }  

function addList(){
    var addList =0; 
    for(var i = 0; i < arguments.length; i++){
        addList += arguments[i];
    }
     return addList;
  }

 console.log(addList(7, 2, 4, 1))

// Prompt:

// - Write a function called addList that accepts any quantity of numbers as arguments, 
//   adds them together and returns the resulting sum.
// - Assume all parameters will be numbers. <=========
// - If called with no arguments, return 0 (zero).

// Examples:

// addList(1) //=> 1
// addList(1,50,1.23) //=> 52.23
// addList(7,-12) //=> -5

// */

// Your solution for 01-addList here: