import User from '../models/user';

export default class UseControll {

  async create(req, res) { // Função para a criação de usuários

    try {
      const novoUser = await User.create(req.body);
      const { nome, email, password } = novoUser;
      res.json({ nome, email, password });

    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // eslint-disable-next-line consistent-return
  async show(req, res) { // Função para a seleção de usuários específicos
    try {
      const user = await User.findByPk(req.userId);

      const { nome, email } = user;
      return res.json({ nome, email });

    } catch (e) {
      return res.status(null);
    }
  }

  // eslint-disable-next-line consistent-return
  async update(req, res) {

    try {
      const user = await User.findByPk(req.userId);
      if (!user){

        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      const updatedUser = await user.update(req.body);
      const { nome, email, password } = updatedUser;

      return res.json({ nome, email, password });

    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // eslint-disable-next-line consistent-return
  async delete(req, res) {

    try {

      const user = await User.findByPk(req.userId);
      if (!user){

        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      await user.destroy();

      return res.json('Usuário apagado com sucesso');

    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

}
