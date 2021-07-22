import express from 'express';
import authController from './auth.controller';

const authRouter = express.Router();

// Login user - running seeds for populating database is required because the register endpoint misses
authRouter.post('/login', authController.login);

export default authRouter;