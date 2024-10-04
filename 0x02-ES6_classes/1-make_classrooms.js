import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom objects with specified sizes.
 *
 * @returns {ClassRoom[]} An array of ClassRoom instances.
 */
export default function initializeRooms() {
  // Create an array of ClassRoom objects with the given sizes
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
