class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.paws = 4;
    }
  
    sound() {
      console.log(`Animal sound by ${this.name}`);
      return 0;
    }
  }
  
  const Obj = new Animal('Perrito', 5);
  Obj.sound();
  console.log(Obj.paws);
  
  const myobjetos = {
    name: 'Perrito2',
    age: 5,
    paws: 4,
  };
  
  class Dog extends Animal {
    constructor(name, age) {
      super(name, age);
      this.barkSound = 'guau'; 
    }
  
    sound() {
      console.log(`${this.name} says: ${this.barkSound}`);  
    }
  }
  
  const Perrito = new Dog('Perrito2', 10);
  console.dir(Perrito);
  Perrito.sound();  

  const { nameDog, ageDog, pawsDog, barkSoundDog } = Perrito;
  console.log(nameDog, ageDog, pawsDog, barkSoundDog);

  const Perrito2 = new Dog('Perrito3', 10);
  
