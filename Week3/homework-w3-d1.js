// Hamster. attributes: 
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:
// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price
class Hamster {
    owner = '';
    name;
    price = 15;
    // constructor(owner, name, price){
    //     this.owner = owner;
    //     this.name = name;
    //     this.price = price;
    // }
    wheelRun(){
        console.log("squeak squeak")
    };
    eatFood(){
        console.log("nibble nibble")
    };
    getPrice(){
        return this.price;
    };
}

// Person. attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0

// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
    name;
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankAccount = 0;

    // constructor(name, age, height, weght, mood, hamsters, bankAccount) {
    //     this.name = name; 
    //     this.age = age; 
    //     this.height = height; 
    //     this.weght = weght; 
    //     this.mood = mood; 
    //     this.hamsters = hamsters; 
    //     this.bankAccount = bankAccount;
    // }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello ${this.name}`)
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
       this.age++;
       this.weight++;
       this.mood--;
       this.bankAccount += 10;
    } 
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice

const person = new Person ();
person.name = 'Timmy';
person.age = 5;
for (let i=0; i<5; i++){
    person.eat();
};
for (let i=0; i<5; i++){
    person.exercise();
};
for (let i=5; i<9; i++){
    person.ageUp();
};

console.log(person.getAge());

const hamster = new Hamster();
hamster.owner = 'Timmy';
hamster.name = 'Gus';

person.buyHamster(hamster);

for (let i=9; i<15; i++) {
    person.ageUp();
};

for (let i=0; i<=2; i++){
   person.eat();
};

for (let i=0; i<=2; i++){
    person.exercise();
};

console.log(person);
console.log(hamster);


// Chef Make Dinners
class Dinner {
    constructor ("appetizer", "entree", "dessert"){
        this.appetizer = "appetizer";
        this.entree = "entree";
        this.dessert = "dessert";
    }
}

class Chef {

}
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "Dinner is served"