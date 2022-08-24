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

// function addList(){
//     var addList =0; 
//     for(var i = 0; i < arguments.length; i++){
//         addList += arguments[i];
//     }
//      return addList;
//   }

//  console.log(addList(7, 21, 13))

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


// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// const thaiSoup: {
//     title = 'TomYum',
//     serves = 2,
//     ingredients = [
//         'chilli', 'kaffir lime leaves', 'WritableStream', 'garlic', 'galangal', 'lemongrass', 'chiken stock', 'fish Source', 'mushrooms', 'coconat cream'
//     ],
// }
// console.log(thaiSoup);

// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const books = [
   {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        alreadyRead: true
    },
{
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        alreadyRead: true
    },

{
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        alreadyRead: true
    },
{
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        alreadyRead: false
    },
]
console.log(books);