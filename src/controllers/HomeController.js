import Aluno from '../models/students';

// eslint-disable-next-line import/prefer-default-export
export const index = async (req, res) => {

  try {
    const alunos = await Aluno.findAll();
    
    res.json(alunos);
  } catch (e) {
console.log(e)
    res.status(400).json({ errors: ['Não há alunos no banco de dados'] });
  
  }
};
