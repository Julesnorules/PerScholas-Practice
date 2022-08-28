class Ship {
  constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull,
      this.firepower = firepower, 
      this.accuracy = accuracy
  }
  attack() {
      
  }
}

class heroShip extends Ship {
  constructor (name, hull, firepower, accuracy) {
    super (name, hull, firepower, accuracy);
    this.name = "USS Assembly";
    this.hull = 20;
    this.firepower = 5
    this.accuracy =.7;
  }
  attack(heroShip) {
    if (this.hull >= 1) {
      if (alienShip.name === alienShip[0].name) {
        if (Math.floor(Math.random() * Math.floor(.7)) = this.accuracy) {
          console.log((alienShip.hull = -.7));
        } 
      }
    }
  }
}



class alienShip extends Ship {
  constructor (name, hull, firepower, accuracy) {
    super (name, hull, firepower, accuracy);
    this.name = name;
    this.hull = hull || Math.floor(Math.random() * 3) + 3;
    this.firepower = firepower || Math.floor(Math.random() * 2) + 4;
    this.accuracy = accuracy || Math.floor(Math.random() * 6) + 8;
  }
    attack(heroShip) {
      if (this.hull >= 1) {
        if (alienShip.name === alienShip[0].name) {
          if (Math.floor(Math.random() * Math.floor(.7)) = this.accuracy) {
            console.log((alienShip.hull = -.7));
          } 
        }
      }
    }
}
 
const alienShips = []; 

alienShip.unshift((a1 = new alienShip("#1")));
alienShip.unshift((a2 = new alienShip("#2")));
alienShip.unshift((a3 = new alienShip("#3")));
alienShip.unshift((a4 = new alienShip("#4")));
alienShip.unshift((a5 = new alienShip("#5")));
alienShip.unshift((a6 = new alienShip("#6")));
