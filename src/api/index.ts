import { Router } from 'express';
import core from './routes/core';
import user from './routes/user';

export default () => {
	const app = Router();

	core(app);
	user(app);

	return app;
}
