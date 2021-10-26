/* eslint-disable import/prefer-default-export */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/user';

dotenv.config();

export const tokenValidator = async (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization) {

    return res.status(401).json({ errors: ['Login requerido'] });

  }
  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const userVerified = await User.findOne({
      where: {
        id,
        email,
      },
    });
    if (!userVerified){

      return res.status(400).json({ errors: ['Token inválido ou expirado'] });
    }

    req.userId = id;
    req.userEmail = email;
    return next();

  } catch (e){

    return res.status(401).json({ errors: ['Token expirado ou inválido.'] });
  }
};
