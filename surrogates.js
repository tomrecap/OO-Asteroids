Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
};

function Cat(name, age) {
  Animal.call(this, name);
  this.age = age;
};

function Animal(name) {
  this.name = name
}

function Dog(name, age) {
  Animal.call(this, name);
  this.age = age;
}

Dog.prototype.sayDog = function() {
  console.log("I'm a dog");
}

Animal.prototype.sayName = function() {
  console.log(this.name);
}