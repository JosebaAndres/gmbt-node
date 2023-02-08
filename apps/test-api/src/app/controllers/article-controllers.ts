import { Request, Response } from 'express';
import { isArticleModel } from '../models/article-model';
import {
  createArticleService,
  deleteArticleService,
  getArticleByIdService,
  getArticlesService,
  updateArticleService,
  articleExistByIdService,
} from '../services/article-services';

export function createArticleController(req: Request, res: Response) {
  if (!isArticleModel(req.body)) {
    res.status(400).send({ message: 'Bad request' });
  } else {
    createArticleService(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the entity',
        });
      });
  }
}

export function getArticlesController(req: Request, res: Response) {
  getArticlesService()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while getting the entities',
      });
    });
}

export function getArticleByIdController(req: Request, res: Response) {
  articleExistByIdService(req.params.id)
    .then((exist) => {
      if (!exist) {
        res.status(400).send({ message: 'Bad request' });
      } else {
        return getArticleByIdService(req.params.id).then((response) => {
          res.status(200).send(response);
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while getting the entity by id',
      });
    });
}

export function updateArticleController(req: Request, res: Response) {
  if (!isArticleModel(req.body)) {
    res.status(400).send({ message: 'Bad request' });
  } else {
    articleExistByIdService(req.params.id)
      .then((exist) => {
        if (!exist) {
          res.status(400).send({ message: 'Bad request' });
        } else {
          return updateArticleService(req.body, req.params.id).then(() => {
            res.status(200).send();
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while updateing the entity',
        });
      });
  }
}

export function deleteArticleController(req: Request, res: Response) {
  articleExistByIdService(req.params.id)
    .then((exist) => {
      if (!exist) {
        res.status(400).send({ message: 'Bad request' });
      } else {
        return deleteArticleService(req.params.id).then(() => {
          res.status(200).send();
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while deleting the entity',
      });
    });
}
