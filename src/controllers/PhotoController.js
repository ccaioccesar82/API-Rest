/* eslint-disable camelcase */
import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/photo';

const upload = multer(multerConfig).single('fotos');
// eslint-disable-next-line import/prefer-default-export
export const create = (req, res) => {

  return upload(req, res, async (error) => {

    try {
      if (error){

        return res.status(400).json({ errors: [error.code] });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      const photo = await Photo.create({ originalname, filename, aluno_id });

      return res.json(photo);
    } catch (e){
      console.log(e);
      return res.status(400).json('Usuário inválido');
    }
  });
};
