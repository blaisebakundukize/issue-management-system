import express from 'express';
import issueController from './issue.controller';
import { requiredToken, requireRoles } from '../../middleware/auth.middleware';
import { checkAssignedUser } from '../../middleware/user.middleware';

const issueRouter = express.Router();

// create Issue - once a assigned user is provided, it checks if he/she is a staff
issueRouter.post('/', requiredToken, checkAssignedUser, issueController.createIssue);

// Get all issues - only admin user is allowed
issueRouter.get('/', requiredToken, requireRoles(['admin']), issueController.getAllIssues);

// Assign user to an issue - it checks if assignee is a staff
issueRouter.post('/:issueId/assign', requiredToken, checkAssignedUser, issueController.assignIssue);


export default issueRouter;