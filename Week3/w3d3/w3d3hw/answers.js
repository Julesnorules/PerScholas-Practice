// ////////////////////////////////
// // Easy Going
// Write a for loop that will log the numbers 1 through 20.
// ////////////////////////////////

// for (let i = 1; i<=20; i++){
//     console.log(i);
// }

// ////////////////////////////////
// // Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
// ////////////////////////////////

// for (let i = 2; i<=200; i+=2){
//     console.log(i);
//     }

// ////////////////////////////////
// // Fizz Buzz
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// ////////////////////////////////

// for (let i = 1; i<=100; i++){
//     if(i % 3 === 0){
//         console.log("Fizz");
//     } else if(i % 5 === 0){
//         console.log("Buzz");
//     } else if (i % 15 ===0 ){
//         console.log("FizzBuzz")
//     }
// }

// ////////////////////////////////
// // Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. 

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// ////////////////////////////////
// plantee.splice(2, 1, 5001);
// console.log(plantee);

// wolfy.splice(3, 1, "Gotham City");
// console.log(wolfy);

// dart.push("Hawkins");
// console.log(dart);

// wolfy.shift();
// wolfy.unshift("Gameboy")
// console.log(wolfy);
// ////////////////////////////////
// // Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!
// ////////////////////////////////

// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let turtle of ninjaTurtles){
//     let newTurtle = turtle.toUpperCase();
//     console.log(newTurtle);
// }

// ////////////////////////////////
// // Methods, Revisited
// Here is a list of favMovies:

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies[8]);

// // Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// // use the .sort method 
// // Thought question: what did this do to the array? Did it permanently alter it? yes

// favMovies.sort();
// console.log(favMovies);

// // // Use the method pop

// console.log(favMovies.pop());

// // // push"Guardians of the Galaxy"

// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// // // Reverse the array

// const reversed = favMovies.reverse();
// console.log(favMovies);

// // // Use the shift method

// favMovies.shift();
// console.log(favMovies);

// // // unshift- what does it return?

// favMovies.unshift();
// console.log(favMovies);

// // // splice"Django Unchained" 

// // favMovies.splice("Django Unchained");

// // // and add "Avatar" 

// // favMovies.push("Avatar");

// // // (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// // console.log(favMovies.indexOf("Django Unchained"));
// // slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

// let half = Math.ceil(favMovies.length / 2);
// for (let i=half; i<favMovies.length; i++){
//     console.log(favMovies[i]);
// }

// // store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// // console.log your final results

// // After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(favMovies.indexOf("Fast and Furious"));
// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// ////////////////////////////////


// ////////////////////////////////
// // Where is Waldo
// With the following multi-dimensional array
// const whereIsWaldo = [
//                     ["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]
//                 ];
// // Remove Eggbert (hint look at the slice/splice method(s))

// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);

// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = 'No One';  
// console.log(whereIsWaldo);
// ////////////////////////////////

// ////////////////////////////////
// //  Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1 Make an array of the kitten's talking points
// Hint 2 Use bracket notation to access each talking point kittyTalk[1];
// Hint 3 Rather than hard-coding the array position number set a variable
//   let meow = 0;
//   kittyTalk[meow]
// Hint 4 You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)
// Hint 5 Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the Math.random() number so that the range is between 0 and the length of the array
// Hint 6 Then round the number by using another Math method like Math.floor()or Math.ceil()or Math.round()
// Image of cat with funny quote about dot
// ////////////////////////////////

// let meow = 0;
// kittyTalk[meow]

let kittyTalk = [
    "...human...why you taking pictures of me?...", 
    "...the catnip made me do it...", 
    "...why does the red dot always get away..."
];



for(let i=0; i<20; i++){
    let getRandomPhrase = kittyTalk[Math.floor(Math.random() * kittyTalk.length)];
  if(i%2===0){
    console.log(getRandomPhrase);
    } else {
        console.log("Love me, pet me! HSSSSSS!");
    }
}

// ////////////////////////////////
// //  Find the Median
// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15
// ////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];


// let calculateMedian = function (arr){
//         arr.sort();
//         let median = 0;
//         let length = arr.length;
//         if (length % 2 != 0 )
//         median = arr[Math.floor(length / 2)]
//         else
//         median = (arr[length/2]+arr[(length/2)-1]) / 2
//       return median; 
//       }

// console.log (calculateMedian(nums))



// Hungry for More?
// Choose one that you didn't get to solve in lab

// Fibonnacci (morning lab)
// Checkerboard (morning lab)
// TwoDArray (afternoon lab)
// Finish all 3 Lab Questions
// Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
// 🔴 The commit message should read:
// "Kristyn and Thom have their outfits ready for class - array practice"
// Dirty Laundry
// Continue looking at the closet arrays:

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
// 🔴 The commit message should read:
// "Hungry for More: I tackled..."
// Technical Requirements
// A JavaScript file that runs without syntax errors (comment out stuff that doesn't work)
// At least one commit message per problem


// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  
//   const thomsCloset = [
//     [
     
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
     
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
     
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
  
//   let kristynsShoe = kristynsCloset.shift();
//   thomsCloset[2].push (kristynsShoe);
  
  
//   let kristynOutfit = []
//   let thomOutfit = []
  
//   for (let i=0; i<3; i++) {
//       let kristyRandom = Math.floor (Math.random()*6)
//       kristynOutfit.push(kristynsCloset[kristyRandom])
//   }
  
//   for (let i=0; i<3; i++) {
//       let thomsRandom = Math.floor(Math.random()*thomsCloset[i].length)
//       thomOutfit.push(thomsCloset[i][thomsRandom])
//   }
  
//   console.log(`Kristy will wear "${kristynOutfit[0]}", "${kristynOutfit[1]}", and "${kristynOutfit[2]}"`)
//   console.log(`Thoms will wear "${thomOutfit[0]}", "${thomOutfit[1]}", and "${thomOutfit[2]}"`)
  
  
//   for (const item of kristynsCloset) {
//       console.log(`WHIRR: Now washing ${item}`);
//   }
  
//   for (let i=0; i<thomsCloset.length; i++) {
//           for (let x=0; x<thomsCloset[i].length; x++) {
//           console.log(`Thoms have "${thomsCloset[i][x]}" in his closet`)
//           }
//   }