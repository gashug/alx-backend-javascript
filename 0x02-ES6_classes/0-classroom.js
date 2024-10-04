/**
 * Represents a classroom with a maximum student capacity.
 */
export default class ClassRoom {
  /**
   * Creates a new ClassRoom instance.
   *
   * @param {number} maxStudentsSize - The maximum number of students the classroom can hold.
   */
  constructor(maxStudentsSize) {
    // Store the maximum students size in a private property
    this._maxStudentsSize = maxStudentsSize;
  }
}
