import express from 'express';
import userController from './user.controller';
import { requiredToken, requireRoles } from '../../middleware/auth.middleware';

const userRouter = express.Router();

// Get all users - only admin allowed to get users
userRouter.get('/', requiredToken, requireRoles(['admin']), userController.getAllUsers);

// Get issues assigned to user
userRouter.get('/issues/assigned', requiredToken, userController.getAssignedIssues);

export default userRouter;