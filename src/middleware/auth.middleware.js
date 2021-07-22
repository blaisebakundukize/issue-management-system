import { User } from '../database/models';
import { decodeJWT } from '../helpers/auth.helpers';

//check whether the token provided
export const requiredToken = async (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) return res.status(401).send({ error: 'Missing token' });

  if (token.split(" ").length > 1) {
    token = token.split(" ")[1];
  }
  
  try {
    const data = decodeJWT(token);

    const { userId } = data.payload;
    let user = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ['password'],
      },
    });

    if (!user) return res.status(404).json({ message: `User not found`, });

    user = { ...user.dataValues };

    user.roles = [];

    if (user.isAdmin) {
      user.roles.push('admin');
    }

    if (user.isStaff) {
      user.roles.push('staff')
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token is invalid or expired' });
  }
};


export const requireRoles = (roles, checkAll = true) => (
  req,
  res,
  next
) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: 'You are unauthorized to perform this action' });
  }

  let authorized;
  if (checkAll) {
    for (const i in roles) {
      authorized = req.user.roles.includes(roles[i]) ? true : false;
    }
  } else {
    authorized = roles.some((role) => req.user.roles.includes(role));
  }
  
  if (authorized) {
    return next();
  }

  return res
    .status(403)
    .json({ message: 'You do not have the permissions to perform this operation' });
};
