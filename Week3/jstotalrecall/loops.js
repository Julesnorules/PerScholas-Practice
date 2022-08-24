// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// let num = 0;
// for (let i = 0; i<=10; i++){
//     console.log(num ++);

// }
// // Write a loop that will print out all the numbers from 10 up to and including 400
// let numb = 10;
// for (let i = 10; i<=400; i++){
//     console.log(numb ++);

// }
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// let number = 12;
// for (let i = 12; i < 4000; i+3 ){    
//         if (number + 3 <= 4000) {
//         console.log(number);
//     } else { 
//         console.log(number);
//         break;
//             }
//     number = number + 3;
// }

// -----------------------------------------------------------------------------

// B. Get even
// Print out the numbers that are within the range of 1 - 100

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// let num = 0;
// for (let i = 0; i<=99; i++){
//  num++;
//     if (num % 2 === 0){
//         console.log(`${num} is an even number`)
//     } else {
//         console.log(num);
//     }
// }

// -----------------------------------------------------------------------------

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages

// let number = 0;
// for (let i = 0; i <= 100; i++){
//     if (number % 5 === 0) {
//         console.log(`I found a ${number}. High five!`)
//     }
//      if (number % 3 === 0){
//         console.log(`I found a ${number}. Three is a crowd`)
//     } else { 
//         console.log(number)
//      }
//      number++;
// }

// -----------------------------------------------------------------------------

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// let bank_account = 0;
// for(let b = 1; b <= 10; b++) {
//     bank_account = bank_account+b;
// }
// console.log(bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for(let b = 1; b <= 100; b++) {
    bank_account = bank_account+(b*2);
}
console.log(bank_account);