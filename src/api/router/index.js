import { Router } from 'express';

import authRouter from '../auth/auth.routes';
import issueRouter from '../issue/issue.routes';
import userRouter from '../user/user.routes';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/issues', issueRouter);
v1Router.use('/users', userRouter);

export { v1Router };