import models from '../../database/models';

const { Issue, User } = models;

class UserController {
  getAssignedIssues = async (req, res) => {
    try {

      const issues = await Issue.findAll({ where: { assignedTo: req.user.id } });

      // const { name, assignedTo } = req.body;

      // const data = { name, createdBy: req.user.id };

      // if (assignedTo) {
      //   data.assignedTo = assignedTo;
      // }

      // const newIssue = await Issue.create(data);

      res.status(200).json({
        message: 'Successfully fetched issues',
        data: issues
      })
    } catch (err) {
      return res.status(400).json({error: "Could not fetch issues"})
    }
  }

  // assignIssue = async (req, res) => {
  //   try {
  //     const { issueId } = req.params;

  //     const { assignedTo } = req.body;

  //     const issue = await Issue.findOne({ where: { id: issueId } });

  //     if (!issue) {
  //       return res.status(400).json({ message: "Issue not found" });
  //     }

  //     await Issue.update({ assignedTo }, { where: { id: issueId } });

  //     const updateIssue = await Issue.findOne({ where: { id: issueId } });

  //     res.status(200).json({
  //       message: 'Membership staff is assigned successfully',
  //       issue: updateIssue
  //     })
  //   } catch (err) {
  //     return res.status(400).json({error: "Could not assign the member"})
  //   }
  // }
}

const userController = new UserController();

export default userController;