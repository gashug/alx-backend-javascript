import Car from './10-car.js';

/**
 * Represents an electric vehicle (EV) car.
 * Extends the Car class.
 */
export default class EVCar extends Car {
  /**
   * Creates a new EVCar instance.
   *
   * @param {string} brand - The brand of the EV car.
   * @param {string} motor - The type of motor the EV car has.
   * @param {string} color - The color of the EV car.
   * @param {string} range - The range of the EV car.
   */
  constructor(brand, motor, color, range) {
    // Call the parent constructor to initialize the brand, motor, and color
    super(brand, motor, color);

    // Store the range in a private property
    this._range = range;
  }

  /**
   * Clones the EV car object, returning a new Car instance.
   *
   * @returns {Car} A new Car instance with the same attributes as the original EVCar,
   *               excluding the range property.
   */
  cloneCar() {
    // Create a new Car instance instead of EVCar
    const clonedCar = new Car();

    // Copy the properties from the original EVCar to the cloned Car, excluding the range
    for (const key in this) {
      if (key !== Symbol.species && key !== '_range') {
        clonedCar[key] = this[key];
      }
    }

    return clonedCar;
  }
}
