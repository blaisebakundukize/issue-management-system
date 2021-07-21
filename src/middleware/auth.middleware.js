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
    const user = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ['password'],
      },
    });

    if (!user) return res.status(404).json({ message: `User not found`, });
    
    req.user = { ...user.dataValues };
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token is invalid or expired' });
  }
};
