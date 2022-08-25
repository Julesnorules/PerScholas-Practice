// A. Q + A
// How do we assign a value to a variable?
// let q = 5;
// let a = 10;
// // How do we change the value of a variable?
// // How do we assign an existing variable to a new variable?
// q = 2;
// a = 4;
// Remind me, what are declare, assign, and define?

// Declaration: Declaration is when you declare a variable with a name, and a variable can be declared only once.
// Example: 
// int x;, String myName;, Boolean myCondition;
// Initialization: Initialization is when we put a value in a variable, this happens while we declare a variable.
// Example: 
// int x = 7;, String myName = "Emi";, Boolean myCondition = false;
// Assignment: Assignment is when we already declared or initialized a variable, and we are changing the value. You can change value of the variable as many time you want or you need.
// declaration with initialization, allows special shorthand syntax for arrays

// What is pseudocoding and why should you do it?
// Pseudo code is a text description of a piece of code or an algorithm. As the name suggests, it is not the actual code. The term is widely used in algorithm-based fields. The methodology allows programmers to present the implementation of an algorithm. It's basically a cooked up presentation of the code. In most cases, algorithms are represented using pseudo codes as they can be interpreted by programmers without any background of coding.
// The pseudo code improves the readability of any approach. It is the best approaches to start the implementation of an algorithm. Following this practice helps in bridging the potential gaps between the program, algorithm, or flowchart. It also acts as a rough document. The main goal should be to explain what each line of an algorithm exactly means.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// it depends on the problem.

// -----------------------------------------------------------------------------
// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable = 'Hello World';

// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
firstVariable = 5;

// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariableto any string.
secondVariable = 'Hi World';

// What is the value of firstVariable?
console.log(firstVariable);
// Create a variable called yourName and set it equal to your name as a string. 
let yourNameand = 'Yulia Evseeva';

// Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
console.log(`Hello, my name is ${yourNameand}`)

// ex: Hello, my name is Jean Valjean

// -----------------------------------------------------------------------------

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true !== false);
  console.log(false === false === false === false === false !== true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a !== b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a === a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');


// -----------------------------------------------------------------------------
//   D. The farm
// Declare a variable animal. Set it to be either "cow" or something else

let animal = 'cat';
if (animal === 'cow') {
    console.log('mooooo')
}    else {
        console.log("Hey! You're not a cow.")
    };


// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// -----------------------------------------------------------------------------

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 15;
if (age >= 16){
    console.log('Here are the keys!')
}    else {
        console.log("Sorry, you're too young.")
    };
