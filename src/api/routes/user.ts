import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/', (req: Request, res: Response) => {
    return res.json({ user: {name: 'confi'} }).status(200);
  });
};