import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {

  static init(sequelize){

    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 225],
            msg: 'Campo nome não pode ficar vazio',
          },
        },

      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 225],
            msg: 'Campo sobrenome não pode ficar vazio',
          },
        },

      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Já existe esse email no banco de dados',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
    }, {

      sequelize,

    });
    return this;
  }

  static associate(model){

    this.hasMany(model.Photo, { foreignKey: 'aluno_id' });

  }
}
