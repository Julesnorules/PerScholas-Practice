// IV. Functions
// ---------------------------------------------------------------------
// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// function printGreeting(name) {
//     console.log(`Hello there, ${name}!`);
//   }
//   printGreeting('Group5');

// ---------------------------------------------------------------------

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

// function printCool(name) {
//     console.log(`${name} is cool!`);
//   }
//   printCool('Captain Reynolds');

// ---------------------------------------------------------------------

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125

// function calculateCube(number) {    
//  return number * number * number;
//   };
//   console.log(calculateCube(5));

// ---------------------------------------------------------------------

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// console.log(isVowel("a"));
// => true

// function isVowel(letter) { 
//     const vowel = ['A', 'E', 'I', 'O', 'U', 'Y'];   
//      if (vowel.includes(letter.toUpperCase())){
//         return true;
//       } else { return false
//          };
// };
//      console.log(isVowel('m'));
   
// ---------------------------------------------------------------------

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// function getTwoLengths(word1, word2) { 
//     return [word1.length, word2.length];
// };
//     console.log(getTwoLengths("Hank", "Hippopopalous"));

// ---------------------------------------------------------------------

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// function getMultipleLengths(array) { 
//     let answer = [];
//     for(let i= 0; i < array.length; i++) {
//       answer.push(array[i].length)
//     }
//   return answer;
// };
//     console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// ---------------------------------------------------------------------

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

// function maxOfThree(a, b, c){
//     if (a>= b && a>=c){
//         return a;
//     } else if (b>=a && b>=c){
//         return b;
//     } else if (c>=a && c>=b){
//         return c;
//   }
// }
// console.log(maxOfThree(3, 6, 9));

// ---------------------------------------------------------------------

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

// let printLongestWord = function(arrayOfStrings) {
//     let longestWord = arrayOfStrings[0];
//   for(let i= 0; i< arrayOfStrings.length; i++) {
//     if (arrayOfStrings[i].length > longestWord.length) {
//       longestWord = arrayOfStrings[i]
//     }
//   }
//   return longestWord;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "Peanutbutter", "a", "Max", "big", "Todd"]));