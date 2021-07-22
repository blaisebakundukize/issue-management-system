import express from 'express';
import userController from './user.controller';
import { requiredToken } from '../../middleware/auth.middleware';
import { checkAssignedUser } from '../../middleware/user.middleware';

const userRouter = express.Router();

userRouter.get('/issues/assigned', requiredToken, userController.getAssignedIssues);
// userRouter.post('/:issueId/assign', requiredToken, checkAssignedUser, issueController.assignIssue);


export default userRouter;