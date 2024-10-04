// Represents the Currency class
export default class Currency {
	// Initializing the parameters
	constructor(code, name) {
		// Storing params in private properties
		this._code = code;
		this._name = name;
	}

	// Getter for the currency code
  get code() {
    return this._code;
  }

  // Setter for the currency code
  set code(newCode) {
    this._code = newCode;
  }

  // Getter for the currency name
  get name() {
    return this._name;
  }

  // Setter for the currency name
  set name(newName) {
    this._name = newName;
  }

  // Method to display the full currency information
  displayFullCurrency() {
    return `${this.name} (${this.code})`;  

  }
}
