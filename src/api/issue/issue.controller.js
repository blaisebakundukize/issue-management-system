import models from '../../database/models';

const { Issue, User } = models;

class IssueController {
  createIssue = async (req, res) => {
    try {

      const { name, assignedTo } = req.body;

      const data = { name, createdBy: req.user.id };

      if (assignedTo) {
        data.assignedTo = assignedTo;
      }

      const newIssue = await Issue.create(data);

      res.status(201).json({
        message: 'issue is added successful',
        issue: newIssue
      })
    } catch (err) {
      return res.status(400).json({error: "Could not create the issue"})
    }
  }

  assignIssue = async (req, res) => {
    try {
      const { issueId } = req.params;

      const { assignedTo } = req.body;

      const issue = await Issue.findOne({ where: { id: issueId } });

      if (!issue) {
        return res.status(400).json({ message: "Issue not found" });
      }

      await Issue.update({ assignedTo }, { where: { id: issueId } });

      const updateIssue = await Issue.findOne({ where: { id: issueId } });

      res.status(200).json({
        message: 'Membership staff is assigned successfully',
        issue: updateIssue
      })
    } catch (err) {
      return res.status(400).json({error: "Could not assign the member"})
    }
  }
}

const issueController = new IssueController();

export default issueController;