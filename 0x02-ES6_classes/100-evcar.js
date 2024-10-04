import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // Create a new Car instance instead of EVCar
    const clonedCar = new Car();

    // Copy the properties from the original EVCar to the cloned Car
    for (const key in this) {
      if (key !== Symbol.species) {
        clonedCar[key] = this[key];
      }
    }

    return clonedCar;
  }
}
