//Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every 

// Determine if every number is greater than or equal to 0
const checkNum = (num) => (num >= 0);
nums.every(checkNum);
console.log(checkNum(nums));

// determine if every word shorter than 8 characters
const checkWord = (word) => word.length < 8;
panagram.every(checkWord);
console.log(checkWord(panagram));

// Filter 

// filter the array for numbers less than 4
const filteredNums = (num) => num < 4
const filteredArr = nums.filter(filteredNums)
console.log(filteredArr)

// filter words that have an even length
const filteredWords = (word) => (word.length % 2 === 0)
const filteredWordArr = panagram.filter(filteredWords)
console.log(filteredWordArr)

// Find

// find the first value divisible by 5
const divisByFive = nums.find(num => num % 5 === 0)
console.log(divisByFive)

// find the first word that is longer than 5 characters
const longerThanFive = (word) => (word.length > 5)
const longestWord = panagram.find(longerThanFive)
console.log(longestWord) // undefined, no words longer than 5 characters

// Find Index

// find the index of the first number that is divisible by 3
const divisByThree = (num) => (num % 3 === 0);
console.log(nums.findIndex(divisByThree))

// find the index of the first word that is less than 2 characters long
const lessThanTwo = (word) => (word.length < 2)
console.log(panagram.findIndex(lessThanTwo)) // Returns -1 if not present

// For Each

// console.log each value of the nums array multiplied by 3
let timesThree = []
nums.forEach(multiplyByThree = (nums) => {
    timesThree.push(nums * 3);
})
console.log(timesThree)

// console.log each word with an exclamation point at the end of it
let exclPoint = []
panagram.forEach(exclamation = (word) => {
    if (word.includes('!')) {
        exclPoint.push(word);
  }
})
console.log(exclPoint)

// Map

// make a new array of each number multiplied by 100
const numMapArr = nums.map(num => num * 100);
console.log(numMapArr);

// make a new array of all the words in all uppercase
const wordMapArr = panagram.map(word => word.toUpperCase());
console.log(wordMapArr);

// Some 

// Find out if some numbers are divisible by 7
const divisBySeven = (num) => num % 7 === 0;
console.log(nums.some(divisBySeven));

// Find out if some words have the letter a in them
const letterA = (word) => word.includes('a');
console.log(panagram.some(letterA));

