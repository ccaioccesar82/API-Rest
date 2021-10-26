import Aluno from '../models/students';
import Photo from '../models/photo';

class AlunoControll {

  async create(req, res) { // Função para a criação de usuários

    try {
      const novoAluno = await Aluno.create(req.body);
      res.json(novoAluno);

    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // eslint-disable-next-line consistent-return
  async show(req, res) { // Função para a seleção de usuários específicos

    try {
      const alunos = await Aluno.findAll({
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename'],
        },
      });

      return res.json(alunos);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: ['Ops! Tivemos um erro.'] });

    }
  }

  // eslint-disable-next-line consistent-return
  async update(req, res) {

    try {
      const user = await Aluno.findByPk(req.params.id);
      if (!user){

        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);

    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // eslint-disable-next-line consistent-return
  async delete(req, res) {

    try {

      const user = await Aluno.findByPk(req.params.id);
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

export default new AlunoControll();
