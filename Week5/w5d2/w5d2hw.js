// ONE ------------------------------------------------------------------
// Homework
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Answer must pass all tests below and have an On time complexity achieved by using 1 or more frequency counter

function validAnagram(str1, str2){
  let freq = {}
  let freq2 = {}

  for (let i = 0; i < str1.length; i++) {
    if (freq[str1[i]]) {
      freq[str1[i]]++
    } else {
      freq[str1[i]] = 1
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (freq2[str2[i]]) {
      freq2[str2[i]]++
    } else {
      freq2[str2[i]] = 1
    }
  }
  const freqKeys = Object.keys(freq)
  for (let i = 0; i < freqKeys.length; i++){
    if (freq[freqKeys[i]] !== freq2[freqKeys[i]]) {
      return false
    }
  }
  return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true


// TWO ------------------------------------------------------------------
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples

const anagrams = (str1, str2) => {
  let str1Idx= {};
  let str2Idx = {};
  for(let s of str1.toLowerCase()) {
    str1Idx[s] = str1Idx[s] + 1 || 1;
  }
  for(let s of str2.toLowerCase()){
    str2Idx[s] = str2Idx[s] + 1 || 1;
  }

  if(Object.keys(str1Idx).length !== Object.keys(str2Idx).length) {
    return false;
  }

  for(let item in str1Idx){
    if(str1Idx[item] !== str2Idx[item]){
      return false;
    }
  }

  return true;
}

function anagramsSort(stringA, stringB) {
  let array1 = stringA.toLowerCase().split('').sort().filter(char => char.match(/[a-zA-z]/)).join('');
  let array2 = stringB.toLowerCase().split('').sort().filter(char => char.match(/[a-zA-z]/)).join('');

  return array1 === array2;
}


console.log(anagrams)

anagrams('rail safety', 'fairy tales') 
anagrams('RAIL! SAFETY!', 'fairy tales') 
anagrams('Hi there', 'Bye there') 

// Challenge: charCount
// Difficulty: Basic
// Prompt:

// - Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.

// - The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.

// - Upper and lower case characters should be counted separately.

// - Space characters should be counted too.

function charCount(strArg) {
  let freqCharCount = {}
  for (let i = 0; i < strArg.length; i++) {
    if (freqCharCount[strArg[i]]) {
      freqCharCount[strArg[i]]++
    } else {
      freqCharCount[strArg[i]] = 1
    }
  }
  return freqCharCount
}

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }