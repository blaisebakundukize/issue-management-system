import models from '../../database/models';
import user from '../../database/models/user';
import { comparePassword, generateAccessToken } from '../../helpers/auth.helpers';

const { Issue, User } = models;

class IssueController {
  createIssue = async (req, res) => {
    try {

      const { name } = req.body;

      const newIssue = await Issue.create({ name, createdBy: req.user.id });

      res.status(201).json({
        message: 'issue is added successful',
        issue: newIssue
      })
    } catch (err) {
      return res.status(400).json({error: "Could not create the issue"})
    }
  }
}

const issueController = new IssueController();

export default issueController;