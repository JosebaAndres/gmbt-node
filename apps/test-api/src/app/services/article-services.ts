import { ArticleModel } from '../models/article-model';
import { ArticleMongoModel } from '../mongoose-models/article-mongoose-model';

/**
 * Create article
 *
 * @param article the model with the new article data
 * @returns created new article
 */
export function createArticleService(
  article: ArticleModel
): Promise<ArticleModel> {
  return new Promise<ArticleModel>((resolve, reject) => {
    reject(new Error('No implemented'));
  });
}

/**
 * Check if article exist
 *
 * @param id the id that needs to be fetched
 * @returns article
 */
export function articleExistByIdService(id: string): Promise<boolean> {
  return new Promise<boolean>(function (resolve, reject) {
    reject(new Error('No implemented'));
  });
}

/**
 * Get all articles
 *
 * @returns all articles
 */
export function getArticlesService(): Promise<Array<ArticleModel>> {
  return ArticleMongoModel.find().exec();
}

/**
 * Get article by article id
 *
 * @param id the id that needs to be fetched
 * @returns article
 */
export function getArticleByIdService(id: string): Promise<ArticleModel> {
  return new Promise<ArticleModel>(function (resolve, reject) {
    reject(new Error('No implemented'));
  });
}

/**
 * Update article
 *
 * @param article the model with the article data
 * @param id the id that needs to be updated
 * @returns no response value expected for this operation
 */
export function updateArticleService(
  article: ArticleModel,
  id: string
): Promise<void> {
  return new Promise<void>(function (resolve, reject) {
    reject(new Error('No implemented'));
  });
}

/**
 * Delete article
 *
 * @param id the id that needs to be deleted
 * @returns no response value expected for this operation
 */
export function deleteArticleService(id: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    reject(new Error('No implemented'));
  });
}
