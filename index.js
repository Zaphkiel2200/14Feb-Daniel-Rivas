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
  