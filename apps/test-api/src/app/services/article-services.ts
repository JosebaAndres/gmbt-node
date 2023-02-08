import { ArticleModel } from '../models/article-model';
import { ArticleMongoModel } from '../mongo-models/article-mongo-model';
import { newGuid } from '../utils/new-guid';
import { Document } from 'mongoose';

/**
 * Create article
 *
 * @param article the model with the new article data
 * @returns created new article
 */
export function createArticleService(
  article: ArticleModel
): Promise<ArticleModel> {
  article.id = newGuid();
  const articleMongoModel = new ArticleMongoModel(article);
  return articleMongoModel.save();
}

/**
 * Try to get article by article id. It there is not returns null
 *
 * @param id the id that needs to be fetched
 * @returns article
 */
function tryGetArticleMongoModelByIdService(
  id: string
): Promise<(Document<unknown> & ArticleModel) | null> {
  return ArticleMongoModel.find({ id: id })
    .exec()
    .then((result) => {
      if (result && result.length === 1) {
        return result[0];
      } else {
        return null;
      }
    });
}

/**
 * Check if article exist
 *
 * @param id the id that needs to be fetched
 * @returns article
 */
export function articleExistByIdService(id: string): Promise<boolean> {
  return tryGetArticleMongoModelByIdService(id).then((result) => {
    if (result) {
      return true;
    } else {
      return false;
    }
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
  return tryGetArticleMongoModelByIdService(id).then((result) => {
    if (result) {
      return result;
    } else {
      throw new Error(`Not found the entity with id: ${id}`);
    }
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
  return tryGetArticleMongoModelByIdService(id).then((result) => {
    if (result) {
      return result.update(article).exec();
    } else {
      throw new Error(`Not found the entity with id: ${id}`);
    }
  });
}

/**
 * Delete article
 *
 * @param id the id that needs to be deleted
 * @returns no response value expected for this operation
 */
export function deleteArticleService(id: string): Promise<void> {
  return tryGetArticleMongoModelByIdService(id).then((result) => {
    if (result) {
      return result.delete();
    } else {
      throw new Error(`Not found the entity with id: ${id}`);
    }
  });
}
