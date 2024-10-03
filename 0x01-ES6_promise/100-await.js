/**
 * Asynchronously uploads a photo and creates a user.
 * @returns {Promise<Object>} - Resolves with an object containing photo and user details,
 *                              or resolves with { photo: null, user: null } if any operation fails.
 */
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    // Initiate both asynchronous operations concurrently
    const [photo, user] = await Promise.all([
      uploadPhoto('profile-1'),
      createUser('Guillaume', 'Salva')
    ]);

    // If both Promises resolve, return the structured object
    return { photo, user };
  } catch (error) {
    // If any Promise rejects, return an object with null values
    return { photo: null, user: null };
  }
}
