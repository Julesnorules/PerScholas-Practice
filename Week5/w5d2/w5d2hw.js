ONE
// Homework (due tomorrow)
// Given two strings, write a function to determine if the second string is an anagram of the first.

// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Answer must pass all tests below and have an On time complexity achieved by using 1 or more frequency counter

// function validAnagram(arr1, arr2){

// }

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true


TWO
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False