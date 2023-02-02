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
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(response);
    })
    .catch((err) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
}

export function getUsersController(req: Request, res: Response) {
  getUsersService()
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(response);
    })
    .catch((err) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
}

export function getUserByIdController(req: Request, res: Response) {
  getUserByIdService(req.params.id)
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(response);
    })
    .catch((err) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
}

export function updateUserController(req: Request, res: Response) {
  updateUserService(req.body, req.params.id)
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(response);
    })
    .catch((err) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
}

export function deleteUserController(req: Request, res: Response) {
  deleteUserService(req.params.id)
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(response);
    })
    .catch((err) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
}
