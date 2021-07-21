import { Router } from 'express';

import authRouter from '../auth/auth.routes';
import issueRouter from '../issue/issue.routes';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/issues', issueRouter);

export { v1Router };