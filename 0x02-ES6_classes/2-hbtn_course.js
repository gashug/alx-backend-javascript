/**
 * Represents a Holberton course with a name, length, and list of students.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse instance.
   *
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course.
   * @param {string[]} students - An array of student names enrolled in the course.
   */
  constructor(name, length, students) {
    // Validate the input parameters using helper functions
    this._checkName(name);
    this._checkLength(length);
    this._checkStudents(students);

    // Store the validated values in private properties
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   *
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   *
   * @param {string} newName - The new name for the course.
   */
  set name(newName) {
    // Validate the new name
    this._checkName(newName);
    this._name = newName;
  }

  /**
   * Gets the length of the course.
   *
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   *
   * @param {number} newLength - The new length for the course.
   */
  set length(newLength) {
    // Validate the new length
    this._checkLength(newLength);
    this._length = newLength;
  }

  /**
   * Gets a copy of the students enrolled in the course.
   *
   * @returns {string[]} A copy of the students array.
   */
  get students() {
    // Return a copy of the students array to prevent modifications
    return [...this._students];
  }

  /**
   * Sets the list of students enrolled in the course.
   *
   * @param {string[]} newStudents - The new list of student names.
   */
  set students(newStudents) {
    // Validate the new students
    this._checkStudents(newStudents);
    this._students = newStudents;
  }

  /**
   * Checks if the given name is a valid string.
   *
   * @param {string} name - The name to check.
   * @throws {TypeError} If the name is not a string.
   */
  _checkName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * Checks if the given length is a valid number.
   *
   * @param {number} length - The length to check.
   * @throws {TypeError} If the length is not a number.
   */
  _checkLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  /**
   * Checks if the given students array is valid.
   *
   * @param {string[]} students - The students array to check.
   * @throws {TypeError} If the students array is not an array of strings.
   */
  _checkStudents(students) {
    if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
