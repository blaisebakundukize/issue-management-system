import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { secretKey } from '../config/environment';

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
}

export const generateAccessToken = (user, expiry = '1h') =>
  jsonwebtoken.sign(
    {
      userId: user.id
    },
    secretKey,
    { expiresIn: expiry }
  );

  export const decodeJWT = (token) => jsonwebtoken.verify(token, secretKey, { complete: true });