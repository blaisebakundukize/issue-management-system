import models from '../../database/models';

const { Issue, User } = models;

class UserController {
  getAssignedIssues = async (req, res) => {
    try {

      const issues = await Issue.findAll({ where: { assignedTo: req.user.id } });

      res.status(200).json({
        message: 'Successfully fetched issues',
        data: issues
      })
    } catch (err) {
      return res.status(400).json({error: "Could not fetch issues"})
    }
  }

  getAllUsers = async (req, res) => {
    try {

      const users = await User.findAll({
        attributes: {exclude: 'password'}
      });

      res.status(200).json({
        message: 'Successfully fetched issues',
        data: users
      })
    } catch (err) {
      return res.status(400).json({error: "Could not fetch users"})
    }
  }
}

const userController = new UserController();

export default userController;