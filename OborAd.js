//Part 1: Humble Beginnings
// create a loop that logs each item in Robin’s inventory.

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }
    for (const [key, value] of Object.entries(adventurer)) {
        console.log(key + ": " + value);
      }
//give Robin’s feline friend a friend of his own with properties name:"frank", type: "flea":
      const newAdventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat"
        }
        };

       newAdventurer.companion.friend={
              name: "Frank",
              type: "Flea",
     //The companion has its own belongings, which includes a small hat and sunglasses.
              belongings:["small hat", "sunglasses "]
          
        };
        console.log(newAdventurer);
        console.log(newAdventurer.companion.friend.belongings);

      //Give Robin the following method:  
        const adventurer1 = {
            name: "Robin",
            health: 10,
            inventory: ["sword", "potion", "artifact"],
            companion: {
                name: "Leo",
                type: "Cat",
                friend: {
                    name: "Frank",
                    type: "Flea",
                    belongings: ["small hat", "sunglasses"],
  // Adding the roll method for friend
            roll: function(mod = 0) {
                const result = Math.floor(Math.random() * 20) + 1 + mod;
                console.log(`${this.name} rolled a ${result}.`);
            }
        },
 // Adding the roll method for companion
        roll: function(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
        }
    },
 // Adding the roll method for adventurer
    roll: function(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};
 // Testing the roll method for adventurer, companion, and friend
adventurer1.roll(); 
adventurer1.companion.roll(); 
adventurer1.companion.friend.roll(); 

// Testing with modifiers
adventurer1.roll(2); 
adventurer1.companion.roll(15); 
adventurer1.companion.friend.roll(7);      
  //Test this method by calling adventurer.roll() a few times.          
           adventurer1.roll(); 
           adventurer1.roll(6); 
           adventurer1.roll(15);

//Part 2: Class Fantasy
//constructor function that allows us to create new characters with whatever name we would like:
// class Character {
//     constructor (name) {
//       this.name = name;
//       this.health = 100;
//       this.inventory = [];
//     }
//   }
//   const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];


//Part 3: Class Features

//Let’s begin by creating an Adventurer class
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100; 
        this.inventory = []; 
    }

    //  roll method to simulate dice rolls
    roll(sides = 20) {
        return Math.floor(Math.random() * sides) + 1;
    }

    // Method to check health status
    checkHealth() {
        console.log(`${this.name} has ${this.health} health remaining.`);
    }
}

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
        this.level = 1; // Adventurer's level
        this.experience = 0; // Experience points
        this.skills = []; // Skills array
        this.quests = []; // Quests array
        this.equippedWeapon = null; // Equipped weapon
    }

    // Method to scout ahead
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        const result = super.roll();
        console.log(`${this.name} rolled a ${result} while scouting.`);
    }

    // Method to gain experience points
    gainExperience(points) {
        this.experience += points;
        console.log(`${this.name} gained ${points} experience points! Total experience: ${this.experience}`);
        this.checkLevelUp();
    }

    // Level up the adventurer based on experience
    checkLevelUp() {
        if (this.experience >= 100 * this.level) { 
            this.level++;
            this.health += 10;
            console.log(`${this.name} leveled up! Now at level ${this.level} with ${this.health} health.`);
        }
    }

    // Method to equip an item
    equip(item) {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
            this.equippedWeapon = item;
            console.log(`${this.name} equipped ${item}.`);
        } else {
            console.log(`${item} is not in ${this.name}'s inventory.`);
        }
    }

    // Method for attacking
    attack() {
        if (this.equippedWeapon) {
            const damage = super.roll() + this.level; 
            console.log(`${this.name} attacks with ${this.equippedWeapon} for ${damage} damage!`);
        } else {
            console.log(`${this.name} has no weapon equipped.`);
        }
    }

    // Method to use an item from inventory
    useItem(item) {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
            console.log(`${this.name} used ${item}.`);
            this.inventory.splice(index, 1); 
        } else {
            console.log(`${item} is not in ${this.name}'s inventory.`);
        }
    }

    // Method to add a quest
    addQuest(quest) {
        this.quests.push(quest);
        console.log(`${this.name} accepted a quest: "${quest}".`);
    }

    // Method to display current quests
    displayQuests() {
        console.log(`${this.name}'s current quests:`);
        this.quests.forEach((quest, index) => {
            console.log(`${index + 1}. ${quest}`);
        });
    }

    // Method to check skills
    addSkill(skill) {
        if (!this.skills.includes(skill)) {
            this.skills.push(skill);
            console.log(`${this.name} learned the skill: ${skill}.`);
        } else {
            console.log(`${this.name} already knows the skill: ${skill}.`);
        }
    }

    // Method to display skills
    displaySkills() {
        console.log(`${this.name}'s skills: ${this.skills.join(", ")}`);
    }
}

const robin = new Adventurer("Robin", "Ranger");
robin.scout(); 
robin.gainExperience(50); 
robin.gainExperience(60); 
robin.inventory.push("bow");
robin.equip("bow"); 
robin.attack(); 
robin.addQuest("Find the Lost Sword"); 
robin.displayQuests(); 
robin.addSkill("Archery");
robin.displaySkills(); 


//Part 4: Class Uniforms
//Using static properties and methods
class Characters {
    static Max_Health = 100;
    constructor (name, health,inventory=[],roles=["Fighter", "Healer", "Wizard"]) {
      this.name = name;
      this.health = 100;
      this.inventory = inventory;
      this.roles =roles;
     
    }
  }
  class Adventurers extends Characters {
    static ROLES = ["Fighter", "Healer", "Wizard"]; // Static array for roles
  
    constructor(name, health, inventory = [], role) {
      super(name, health, inventory, Adventurers.ROLES); 
       // Check if the provided role is valid
    if (!Adventurers.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}. Must be one of ${Adventurers.ROLES.join(', ')}.`);
      }
      
      this.role = role; 
    }
  }
  const Characters1 = new Characters('Peace')
  console.log(Characters1.name);
  console.log(Characters1.health);
  console.log(Characters1.inventory);
  console.log(Characters1.roles);
  
  
