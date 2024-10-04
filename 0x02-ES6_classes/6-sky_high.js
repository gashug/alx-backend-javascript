import Building from './5-building.js';

/**
 * Represents a high-rise building.
 * Extends the Building class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding instance.
   *
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    // Call the parent constructor to initialize the sqft property
    super(sqft);

    // Store the number of floors in a private property
    this._floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   *
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Provides an evacuation warning message for the building.
   *
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
