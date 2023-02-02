import { Request, Response } from 'express';
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  getUsersService,
  updateUserService,
} from '../services/user-services';

// https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

export function createUserController(req: Request, res: Response) {
  createUserService(req.body)
    .then((response) => {
      res.statusCode = 200;
      res.send(response);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    });
}

export function getUsersController(req: Request, res: Response) {
  getUsersService()
    .then((response) => {
      res.statusCode = 200;
      res.send(response);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({
        message: err.message || 'Some error occurred while getting the users.',
      });
    });
}

export function getUserByIdController(req: Request, res: Response) {
  getUserByIdService(req.params.id)
    .then((response) => {
      res.statusCode = 200;
      res.send(response);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({
        message:
          err.message || 'Some error occurred while getting the user by id.',
      });
    });
}

export function updateUserController(req: Request, res: Response) {
  updateUserService(req.body, req.params.id)
    .then((response) => {
      res.statusCode = 200;
      res.send(response);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({
        message: err.message || 'Some error occurred while updateing the use.',
      });
    });
}

export function deleteUserController(req: Request, res: Response) {
  deleteUserService(req.params.id)
    .then((response) => {
      res.statusCode = 200;
      res.send(response);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({
        message: err.message || 'Some error occurred while deleting the user.',
      });
    });
}
