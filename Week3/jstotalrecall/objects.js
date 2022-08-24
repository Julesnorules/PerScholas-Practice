
// Objects
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
name: "Yulia",
email: "evseevayk@gmail.com",
age: 24,
purchased: [],
};

// ----------------------------------------------------------

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = "goshootingforthestars@gmail.com";
user.age = 25;

// ----------------------------------------------------------

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = "Oakton";

// ----------------------------------------------------------

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
// console.log(user);
// console.log(user.purchased[2]);
// ----------------------------------------------------------

// E. Object-within-object
// If we want to give our user a friend with a name and age, we could write:
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'Oakton',
    purchased: [],
}
// console.log(user.friend.name);
// console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
// console.log(user.friend.purchased[1]);

// When we console.log user, we would see the friend object added to our user object.
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

// ----------------------------------------------------------
// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for (let i = 0; i<user.purchased.length; i++){
 }
console.log(user.purchased);

for (let i = 0; i<user.friend.purchased.length; i++){
}
console.log(user.friend.purchased);

// ----------------------------------------------------------

// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with user as the argument.

function updateUser(){
   user.age++;
   user.name = user.name.toUpperCase();
};
function oldAndLoud(person){
    person.age++;
    person.name = person.name.toUpperCase();
 };

 updateUser();
 console.log(user);

 oldAndLoud(user);

 


