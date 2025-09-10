/* class Animal{
    constructor(lion){
    this.lion = lion
    }
    eat(){
        console.log("Animal is Eating")
    }

    sleep(){
        console.log("Animal is Sleeping")
    }
}


class DomesticAnimal extends Animal {
    constructor(lion, hunt){
    super (lion);
    this.hunt = hunt;
    }

    live (){
        console.log('Animal is living in the jungle')
    }
}

const simba = new DomesticAnimal ("simba" , "Hunted");
simba. eat();
simba.sleep();
simba.live();
console.log(simba.lion);
console.log(simba.hunt) 
*/


/* 
class Parent {
  constructor(gender) {
    this.gender = gender;
  }
  eat() {
    console.log("Parent is Eating");
  }
  sleep() {
    console.log("Parent is sleeping");
  }
}

class Child extends Parent{
  constructor(gender, name) {
    super(gender);
    this.name = name;
  }
  cry() {
    console.log("Child is Crying");
  }
}

const child = new Child("male", "Aayu");
child.eat(); // Inherited from Parent
child.sleep(); // Inherited from Parent
child.cry();
console.log(child.name);
console.log(child.gender);
*/


/*
class Car {
    constructor(brand){
        this.brand = brand;
    }

    start(){
        console.log("Car is Start");
    }

    stop(){
        console.log("Car is stop")
    }
}

class ElectricCar extends Car {
    constructor(brand , color) {
        super(brand);
        this.brand = brand;
        this.color = color;
    }
    battery(){
        console.log("Battery is low")
    }
}

const electricCar = new ElectricCar ("TESLA" , "Black");
electricCar.start();
electricCar.stop();
electricCar.battery();
console.log(electricCar.brand);
console.log(electricCar.color);
*/