import { Request, Response, Router } from 'express';

export function getRootRoutes(): Router {
  const router = Router();
  router.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Welcome to test-api!' });
  });
  return router;
}
