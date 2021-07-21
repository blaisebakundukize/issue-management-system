import express from 'express';
import issueController from './issue.controller';
import { requiredToken } from '../../middleware/auth.middleware';
import { checkAssignedUser } from '../../middleware/user.middleware';

const issueRouter = express.Router();

issueRouter.post('/', requiredToken, checkAssignedUser, issueController.createIssue);
issueRouter.post('/:issueId/assign', requiredToken, checkAssignedUser, issueController.assignIssue);


export default issueRouter;