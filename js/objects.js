// Об'єктний літерал
const bmwX7 = {
  make: "BMW",
  model: "X7",
  price: 100000,
  beep: function () {
    console.log(`${this.make} ${this.model} beep-beep!`);
  },
};

// console.log(bmwX7.model);
// bmwX7.model = 'X7M';
// console.log(bmwX7.model);
// bmwX7.beep();

console.log(bmwX7);

// Клас
class Car {
  constructor(make, model, price) {
    // let this = {};
    this.make = make;
    this.model = model;
    this.price = price;
    // return this;
  }
  beep() {
    console.log(`${this.make} ${this.model} beep-beep!`);
  }
}



const jeepRenegade = new Car("Jeep", "Renegade", 40000);
jeepRenegade.beep();
console.log(jeepRenegade);

const audiQ8 = new Car("Audi", "Q8", 90000);
audiQ8.beep();
console.log(audiQ8);

// JSON - JavaScript Object Notation
let renegadeJSON = JSON.stringify(jeepRenegade);
console.log(renegadeJSON);

// Wrong JSON
// renegadeJSON = '{make:"Jeep","model":"Renegade","price":40000}';

let car;
try {
  car = JSON.parse(renegadeJSON);
} catch {
  console.error("Wrong JSON!!!");
}
console.log(car);

// Поглиблена частина

// Наслідування

class EVCar extends Car {
  #battery;
  constructor(make, model, price, battery) {
    super(make, model, price);
    this.#battery = battery;
  }
  charge() {
    console.log(`Charging ${this.#battery}...`);
  }
}

const teslaY = new EVCar("Tesla", "Y", 50000, 84);
console.log(teslaY);
teslaY.beep();
teslaY.charge();

// Спеціальний тип циклу для об'єктів
for (const key in teslaY) {
  console.log(key, teslaY[key]);
}

// Копіювання об'єктів
const newTeslaY = { ...teslaY };
console.log(newTeslaY);

// Функція-конструктор
// function Car(make, model, price) {
//   // let this = {};
//   this.make = make;
//   this.model = model;
//   this.price = price;
//   // return this;
// }
// Car.prototype.beep = function () {
//   console.log(`${this.make} ${this.model} beep-beep!`);
// };