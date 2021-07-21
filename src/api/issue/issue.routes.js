import express from 'express';
import issueController from './issue.controller';
import { requiredToken } from '../../middleware/auth.middleware';

const issueRouter = express.Router();

issueRouter.post('/', requiredToken, issueController.createIssue);

export default issueRouter;