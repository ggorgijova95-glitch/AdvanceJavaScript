/*## Create a class Animal that has:
* name
* type - carnivore/herbivore/omnivore
* age
* size
* eat - a method that checks if the input is an Animal.
	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
* isEaten = default false*/
class Animal {
  constructor(name, type, age, size) {
    this.name = name;         // Name of the animal
    this.type = type;         // 'carnivore', 'herbivore', 'omnivore'
    this.age = age;
    this.size = size;         // numerical size for comparison
    this.isEaten = false;     // default value
  }

  eat(food) {
    if (food instanceof Animal) {
      // Check if the target animal is bigger than twice this animal
      if (food.size >= 2 * this.size) {
        console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large.`);
        return;
      }

      // Check if this animal is herbivore
      if (this.type.toLowerCase() === 'herbivore') {
        console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);
        return;
      }

      // If not herbivore and the food is smaller, eat it
      food.isEaten = true;
      console.log(`The animal ${this.name} ate the ${food.name}.`);

    } else {
      // If food is not an animal
      console.log(`The animal ${this.name} is eating ${food}.`);
    }
  }
}
const rabbit = new Animal("Rabbit", "herbivore", 2, 5);
const fox = new Animal("Fox", "carnivore", 3, 10);
const deer = new Animal("Deer", "herbivore", 4, 20);

fox.eat(rabbit);  // The animal Fox ate the Rabbit.
rabbit.eat(fox);  // The animal Rabbit is a herbivore and does not eat other animals
fox.eat(deer);    // The animal Fox tried to eat the Deer but it was too large.
rabbit.eat("grass"); // The animal Rabbit is eating grass.

console.log(rabbit.isEaten); // true
console.log(deer.isEaten);   // false