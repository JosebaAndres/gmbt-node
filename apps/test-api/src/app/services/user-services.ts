import { UserModel } from '../models/user-model';

/**
 * Create user
 *
 * @param user the model with the new user data
 * @returns created new user
 */
export function createUserService(user: UserModel): Promise<UserModel> {
  return new Promise<UserModel>((resolve, reject) => {
    reject(new Error('No implemented'));
  });
}

/**
 * Check if user exist
 *
 * @param id the id that needs to be fetched
 * @returns user
 */
export function userExistByIdService(id: string): Promise<boolean> {
  return new Promise<boolean>(function (resolve, reject) {
    reject(new Error('No implemented'));
  });
}

/**
 * Get all users
 *
 * @returns all users
 */
export function getUsersService(): Promise<Array<UserModel>> {
  return new Promise<Array<UserModel>>(function (resolve, reject) {
    reject(new Error('No implemented'));
  });
}

/**
 * Get user by user id
 *
 * @param id the id that needs to be fetched
 * @returns user
 */
export function getUserByIdService(id: string): Promise<UserModel> {
  return new Promise<UserModel>(function (resolve, reject) {
    reject(new Error('No implemented'));
  });
}

/**
 * Update user
 *
 * @param user the model with the user data
 * @param id the id that needs to be updated
 * @returns no response value expected for this operation
 */
export function updateUserService(user: UserModel, id: string): Promise<void> {
  return new Promise<void>(function (resolve, reject) {
    reject(new Error('No implemented'));
  });
}

/**
 * Delete user
 *
 * @param id the id that needs to be deleted
 * @returns no response value expected for this operation
 */
export function deleteUserService(id: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    reject(new Error('No implemented'));
  });
}
