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
    }else {console.log("The Erth is doomed!")}
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

