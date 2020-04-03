import { Router, Request, Response, NextFunction } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/', route);


  route.get('/status', (req: Request, res: Response, next: NextFunction) => {
    console.debug('Calling Sign-Out endpoint with body');

    return res.status(200).json(['name', 'mark']);
  });
};
