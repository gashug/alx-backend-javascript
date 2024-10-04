import Currency from './3-currency.js';

/**
 * Represents a pricing object with an amount and currency.
 */
export default class Pricing {
  /**
   * Creates a new Pricing instance.
   *
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency associated with the price.
   */
  constructor(amount, currency) {
    // Store the amount and currency in private properties
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the price amount.
   *
   * @returns {number} The price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the price amount.
   *
   * @param {number} newAmount - The new price amount.
   */
  set amount(newAmount) {
    this._amount = newAmount;
  }

  /**
   * Gets the currency associated with the price.
   *
   * @returns {Currency} The currency object.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency associated with the price.
   *
   * @param {Currency} newCurrency - The new currency object.
   */
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  /**
   * Displays the full pricing information in a formatted string.
   *
   * @returns {string} The formatted price string.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts the price based on a given conversion rate.
   *
   * @param {number} amount - The original price amount.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
