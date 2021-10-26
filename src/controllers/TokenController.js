/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();

// eslint-disable-next-line import/prefer-default-export
export const token = async (req, res) => {
  try {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(400).json({ errors: ['Há campos obrigratórios a preencher'] });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {

      return res.status(400).json({ errors: ['O email é inválido'] });
    }

    if (!(await user.tokenCompare(password))){
      return res.status(400).json('Senha incorreta');
    }

    const { id } = user;
    const tokenSecret = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      message: 'Você está logado',
      tokensecret: tokenSecret,
    });
  } catch (e){

    console.log(e);

  }
};
