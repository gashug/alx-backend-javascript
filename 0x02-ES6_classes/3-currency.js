/**
 * Represents a currency with a code and name.
 */
export default class Currency {
  /**
   * Creates a new Currency instance.
   *
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    // Store the code and name in private properties
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   *
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   *
   * @param {string} newCode - The new currency code.
   */
  set code(newCode) {
    this._code = newCode;
  }

  /**
   * Gets the currency name.
   *
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   *
   * @param {string} newName - The new currency name.
   */
  set name(newName) {
    this._name = newName;
  }

  /**
   * Displays the full currency information in a formatted string.
   *
   * @returns {string} The formatted currency information.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
