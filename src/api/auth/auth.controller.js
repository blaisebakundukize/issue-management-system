import models from '../../database/models';
import { comparePassword, generateAccessToken } from '../../helpers/auth.helpers';

const { User } = models;

class Auth {
  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      let user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          message: `invalid email or password`,
        });
      }

      user = { ...user.dataValues };

      if (!comparePassword(user.password, password)) {
        return res.status(401).json({
          message: 'invalid email or password',
        });
      }

      delete user.password;

      const token = generateAccessToken(user);

      user.token = token;

      return res.json({ user });

    } catch (err) {
      return res.status(401).json({error: "Could not sign in"})
    }
  }
}

const auth = new Auth();

export default auth;