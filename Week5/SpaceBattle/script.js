//SPACE BATTLE!

class Ship {
  constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull,
      this.firepower = firepower, 
      this.accuracy = accuracy
  }
}

class HeroShip extends Ship {
  constructor (name, hull, firepower, accuracy) {
    super (name, hull, firepower, accuracy);
    this.name = "USS Assembly";
    this.hull = 20;
    this.firepower = 5;
    this.accuracy =.7;
  }
  attackAlien(targets) {
    if(this.hull > 0){
      for(let alienShip of targets){
        do{
          let randomNum = Math.random();
            if(randomNum < this.accuracy){
              alienShip.hull -= this.firepower; 
                console.log("You hit the target!");
            } else {console.log("You have missed!")}
              alienShip.attackHero(this) 
          } while(alienShip.hull > 0){console.log(`Good job! The ${alienShip.name} is destroyed!`)};
          if(alienShip.name === "AlienShip #6" && alienShip.hull <= 0) {
            console.log("Hooray! Congratulations, you saved the Earth from an alien invasion!");
        }
      } 
    } else {console.log("The Erth is doomed!")}
  }
}

class AlienShip extends Ship {
  constructor (name, hull, firepower, accuracy) {
    super (name, hull, firepower, accuracy);
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = accuracy || Number((Math.random() * (0.8 - 0.6) + 0.6).toFixed(1));
  }
  attackHero(target) {
    if (this.hull >= 1) {      
      let randomNum = Math.random()
      if(randomNum < target.accuracy){
        console.log(`Attacked ${target.name} for ${this.firepower} damage!`);
      } else console.log("It has missed!")
    };          
  };
}

let heroShipOne = new HeroShip("USA Assembly");

function createAlien() {
  let alienShips = [];
  for(let i=1; i<=6; i++){
    let alienShip = new AlienShip("AlienShip #" + i );
    alienShips.push(alienShip);
  }
  return alienShips;
} 
let alienShips = createAlien();

heroShipOne.attackAlien(alienShips);


//🚀 Bonuses
// The aliens send a random number of ships to attack Earth. Think of a reasonable range and implement it.
// Scientists have developed a super targeting computer for your lasers. You now are asked which of the aliens you would like to hit with your lasers.
// Scientists have improved your ship's shields. They don't work that consistently, and only improve your hit points by a random number each time
// Scientists have put missiles on your ship. You only have a limited number of them, but they do a lot of damage. You can say before each battle if you want to use one of your missles.
// The aliens have gained emotions and now can attack more than one at a time.
// Evil alien scientists have created an alien mega-ship. This mega-ship contains a number of "weapon pods" that each have their own individual hit points. These "weapon-pods" ( objects ) must all be destroyed before you can begin doing damage to the main ship, which also has its own hit points.


//🚀 Bonus Bonuses
// When the game is over, prompt the user if they would like to play again, and make it so the user can play again with all the values set back to default.
// So far the entire game is just one battle, with many aliens. Implement a game that consists of multiple battles where enemies respawn for a new battle at the end of the old battle. Keep track of points for the number of wins the player has.
// After every battle you are asked if you want to return to base and recharge your shields.
// Make the players and enemies stronger after each battle
// Distribute medals and power ups to the player depending on points

