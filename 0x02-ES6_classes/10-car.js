/**
 * Represents a car with a brand, motor, and color.
 */
export default class Car {
  /**
   * Creates a new Car instance.
   *
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor the car has.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    // Store the car's attributes in private properties
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Create a symbol to store the original constructor
    this[Symbol.species] = this.constructor;
  }

  /**
   * Clones the car object.
   *
   * @returns {Car} A new Car instance with the same attributes.
   */
  cloneCar() {
    // Use the symbol to get the original constructor
    const clonedCar = new this[Symbol.species]();

    // Copy the properties from the original car to the cloned car
    for (const key in this) {
      if (key !== Symbol.species) {
        clonedCar[key] = this[key];
      }
    }

    return clonedCar;
  }
}
