import express from 'express';
import userController from './user.controller';
import { requiredToken, requireRoles } from '../../middleware/auth.middleware';

const userRouter = express.Router();

userRouter.get('/', requiredToken, requireRoles(['admin']), userController.getAllUsers);
userRouter.get('/issues/assigned', requiredToken, userController.getAssignedIssues);

export default userRouter;