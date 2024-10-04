// Represents the HolbertonCourse class
export default class HolbertonCourse {
  // initializing the parameters
  constructor(name, length, students) {
    // validating the input parameters using helper functions
    this._checkName(name);
    this._checkLength(length);
    this._checkStudents(students);

    // storing the validated values in private properties
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for the course name
  get name() {
    return this._name;
  }

  // Setter for the course name
  set name(newName) {
    // Validate the new name
    this._checkName(newName);
    this._name = newName;
  }

  // Getter for the course length
  get length() {
    return this._length;
  }

  // Setter for the course length
  set length(newLength) {
    // Validate the new length
    this._checkLength(newLength);
    this._length = newLength;
  }

  // Getter for the course students
  get students() {
    // Return a copy of the students array to prevent modifications
    return [...this._students];
  }

  // Setter for the course students
  set students(newStudents) {
    // Validate the new students
    this._checkStudents(newStudents);
    this._students = newStudents;
  }

  // Helper function to check if the name is a string
  _checkName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // Helper function to check if the length is a number
  _checkLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  // Helper function to check if the students are an array of strings
  _checkStudents(students) {
    if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
