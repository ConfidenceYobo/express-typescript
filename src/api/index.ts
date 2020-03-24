import { Router, Request, Response, NextFunction } from 'express';
import core from './routes/core';
import user from './routes/user';

// guaranteed to get dependencies
export default () => {
	const app = Router();

	core(app);
	user(app);

	return app;
}