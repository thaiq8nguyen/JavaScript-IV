/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(attrs) {
//     this.createdAt = attrs.createdAt;
//     this.name = attrs.name;
//     this.dimensions =  attrs.dimensions;
  
//   }
  
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`
//   }

  class GameObject {
      constructor(attrs) {
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions =  attrs.dimensions;   
      }
      destroy() {
        return `${this.name} was removed from the game.`
      }
   }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats(attrs) {
//     GameObject.call(this, attrs);
//     this.healthPoints = attrs.healthPoints;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype)
//   CharacterStats.prototype.takeDamage = function(healthPoints) {
//     this.healthPoints = this.healthPoints - healthPoints;
//     if(this.healthPoints <= 0) {
//       return `HP--${this.healthPoints}--${this.name} is dead`
//     } else {
//       return `HP--${this.healthPoints}--${this.name} took ${healthPoints} damage`
//     }
    
//   }

  class CharacterStats extends GameObject {
      constructor(attrs) {
          super(attrs);
          this.healthPoints = attrs.healthPoints;
      }

      takeDamage(healthPoints) {
        this.healthPoints = this.healthPoints - healthPoints;
        if(this.healthPoints <= 0) {
            return `HP--${this.healthPoints}--${this.name} is dead`
        } else {
            return `HP--${this.healthPoints}--${this.name} took ${healthPoints} damage`
        }    
      }
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
//   function Humanoid (attrs) {
//     CharacterStats.call(this, attrs);
//     this.team =  attrs.team;
//     this.weapons = attrs.weapons;
//     this.language = attrs.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   }

  class Humanoid extends CharacterStats {
      constructor(attrs) {
        super(attrs);
        this.team =  attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}`;    
      }
  }
  
  /* Begin Stretch Tasks */
  
//   function Villain(attrs) {
    
//     Humanoid.call(this, attrs)
//   }
//   Villain.prototype = Object.create(Humanoid.prototype);
//   Villain.prototype.attack = function(healthPoints) {
//     if(this.healthPoints > 0) {
//       return `HP--${this.healthPoints}--${this.name} has perform a whirlwind attack dealing ${healthPoints} HP to a Lancellot.`
//     } else {
//       return `HP--0--${this.name} is dead.` 
//     }
    
//   }

  class Villain extends Humanoid {
      constructor(attrs) {
          super(attrs);
      }

      attack(healthPoints) {
        if(this.healthPoints > 0) {
            return `HP--${this.healthPoints}--${this.name} has perform a whirlwind attack dealing ${healthPoints} HP to a Lancellot.`
        } else {
            return `HP--0--${this.name} is dead.` 
        }    
      }
  }
  
//   function Hero(attrs) {
//     Humanoid.call(this, attrs)
//   }
//   Hero.prototype = Object.create(Humanoid.prototype);
//   Hero.prototype.attack = function(healthPoints) {
//     if(this.healthPoints > 0){
//       return `HP--${this.healthPoints}--${this.name} has perform aerial attack dealing ${healthPoints} HP to a Orka.`
//     } else {
//       return `HP--0--${this.name} is dead.` 
//     }
    
//   }

  class Hero extends Humanoid {
      constructor(attrs) {
        super(attrs);    
      }
      attack(healthPoints) {
        if(this.healthPoints > 0){
            return `HP--${this.healthPoints}--${this.name} has perform aerial attack dealing ${healthPoints} HP to a Orka.`
        } else {
            return `HP--0--${this.name} is dead.` 
        }    
      }
  }
  
  /* End Stretch Tasks */
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  /* Begin Stretch Tasks */
  const warlock = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 7,
    },
    healthPoints: 15,
    name: 'Orka',
    team: 'Dark Willow',
    weapons: [
      'Poison-infused blade',
      
    ],
    language: 'Orkish',
  });
  
  const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 7,
    },
    healthPoints: 15,
    name: 'Lancellot',
    team: 'Arthur',
    weapons: [
      'Righteous sword',
      'Golden shield'
      
    ],
    language: 'Old-English',
  });
  
  
  function attackPoints(){
  
    return Math.floor(Math.random() * (15-1) + 1);
  
  }
  /* End Stretch Tasks */
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage(5)); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  
    console.log("!!!FIGHT!!!")
    console.log("Warlock: HP: " + warlock.healthPoints);
    console.log("Knight: HP: " + knight.healthPoints);
    
    while(warlock.healthPoints > 0 || knight.healthPoints > 0){
      
      let warlockDamageDealt = attackPoints();
      console.log(warlock.attack(warlockDamageDealt));
      console.log(knight.takeDamage(warlockDamageDealt));
  
      
      let knightDamageDealt = attackPoints();
      console.log(knight.attack(knightDamageDealt));
      console.log(warlock.takeDamage(knightDamageDealt));
      
  
      
  
    }
    console.log("!!!GAMEOVER!!!")
    // let damageDealt = attackPoints();
    // console.log(warlock.attack(damageDealt));
    // console.log(knight.takeDamage(damageDealt));
    // console.log(knight.attack(18));
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
