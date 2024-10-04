/**
 * Represents a Holberton class.
 */
export default class HolbertonClass {
  /**
   * Creates a new HolbertonClass instance.
   *
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    // Store the size and location in private properties
    this._size = size;
    this._location = location;
  }

  /**
   * Converts the class to a number representing the size.
   *
   * @returns {number} The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Converts the class to a string representing the location.
   *
   * @returns {string} The location of the class.
   */
  toString() {
    return this._location;
  }
}
