import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { secretKey } from '../config/environment';

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
}

export const generateAccessToken = (user, expiry = '50m') =>
  jsonwebtoken.sign(
    {
      isStaff: user.isStaff,
      isAdmin: user.isAdmin,
      userId: user.id
    },
    secretKey,
    { expiresIn: expiry }
  );