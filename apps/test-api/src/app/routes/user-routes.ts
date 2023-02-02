import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUsersController,
  updateUserController,
} from '../controllers/user-controllers';

export function getUserRoutes(): Router {
  const router = Router();
  // Create a new User
  router.post('/', createUserController);
  // Retrieve all Users
  router.get('/', getUsersController);
  // Retrieve a single User with id
  router.get('/:id', getUserByIdController);
  // Update a User with id
  router.put('/:id', updateUserController);
  // Delete a User with id
  router.delete('/:id', deleteUserController);
  return router;
}
