import { User } from '../database/models';

export const checkAssignedUser = async (req, res, next) => {
  const { assignedTo } = req.body;

  if (!assignedTo) {
    return next();
  }

  try {
    const assignedUser = await User.findOne({ where: { id: assignedTo } });
    if (!assignedUser) {
      return res.status(404).json({ message: "Assignee not found"})
    }
    return next();
  } catch (error) {
    res.status(404).json({ message: "Assignee not found"})
  }
}