/**
 * Represents a generic building structure.
 */
export default class Building {
  /**
   * Creates a new Building instance.
   *
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    // Store the square footage in a private property
    this._sqft = sqft;
  }

  /**
   * Gets the square footage of the building.
   *
   * @returns {number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }
}
