import express from 'express';
import auth from './auth.controller';

const authRouter = express.Router();

authRouter.post('/login', auth.login);

export default authRouter;