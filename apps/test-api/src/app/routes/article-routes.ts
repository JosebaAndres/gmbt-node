import { Router } from 'express';
import {
  createArticleController,
  deleteArticleController,
  getArticleByIdController,
  getArticlesController,
  updateArticleController,
} from '../controllers/article-controllers';

export function getArticleRoutes(): Router {
  const router = Router();
  // Create a new Article
  router.post('/', createArticleController);
  // Retrieve all Articles
  router.get('/', getArticlesController);
  // Retrieve a single Article with id
  router.get('/:id', getArticleByIdController);
  // Update a Article with id
  router.put('/:id', updateArticleController);
  // Delete a Article with id
  router.delete('/:id', deleteArticleController);
  return router;
}
