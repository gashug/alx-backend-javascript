export class StudentHolberton {
  /**
   * Creates a new StudentHolberton instance.
   *
   * @param {string} firstName - The student's first name.
   * @param {string} lastName - The student's last name.
   * @param {HolbertonClass} holbertonClass - The Holberton class the student belongs to.
   */
  constructor(firstName, lastName, holbertonClass) {
    // Store the student's information in private properties
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Gets the student's full name.
   *
   * @returns {string} The student's full name.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Gets the Holberton class the student belongs to.
   *
   * @returns {HolbertonClass} The Holberton class object.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Gets a full description of the student, including name, class year, and location.
   *
   * @returns {string} The student's full description.
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}
