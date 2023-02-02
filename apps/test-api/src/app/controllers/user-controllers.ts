import { Request, Response } from 'express';
import { isUserModel } from '../models/user-model';
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  getUsersService,
  updateUserService,
  userExistByIdService,
} from '../services/user-services';

export function createUserController(req: Request, res: Response) {
  if (!isUserModel(req.body)) {
    res.status(400).send({ message: 'Bad request' });
  } else {
    createUserService(req.body)
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

export function getUsersController(req: Request, res: Response) {
  getUsersService()
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

export function getUserByIdController(req: Request, res: Response) {
  userExistByIdService(req.params.id)
    .then((exist) => {
      if (!exist) {
        res.status(400).send({ message: 'Bad request' });
      } else {
        return getUserByIdService(req.params.id).then((response) => {
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

export function updateUserController(req: Request, res: Response) {
  if (!isUserModel(req.body)) {
    res.status(400).send({ message: 'Bad request' });
  } else {
    userExistByIdService(req.params.id)
      .then((exist) => {
        if (!exist) {
          res.status(400).send({ message: 'Bad request' });
        } else {
          return updateUserService(req.body, req.params.id).then((response) => {
            res.status(200).send(response);
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

export function deleteUserController(req: Request, res: Response) {
  userExistByIdService(req.params.id)
    .then((exist) => {
      if (!exist) {
        res.status(400).send({ message: 'Bad request' });
      } else {
        return deleteUserService(req.params.id).then((response) => {
          res.status(200).send(response);
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while deleting the entity',
      });
    });
}
