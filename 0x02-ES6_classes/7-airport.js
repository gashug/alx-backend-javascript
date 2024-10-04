/**
 * Represents an airport.
 */
export default class Airport {
  /**
   * Creates a new Airport instance.
   *
   * @param {string} name - The name of the airport.
   * @param {string} code - The airport code.
   */
  constructor(name, code) {
    // Store the name and code in private properties
    this._name = name;
    this._code = code;
  }

  /**
   * Returns a string representation of the airport.
   *
   * @returns {string} The airport code enclosed in square brackets.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
