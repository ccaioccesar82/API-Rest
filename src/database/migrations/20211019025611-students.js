module.exports = {
  // eslint-disable-next-line arrow-body-style
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('alunos', {

      id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNULL: false,

      },

      sobrenome: {
        type: Sequelize.STRING,
        allowNULL: false,

      },

      email: {
        type: Sequelize.STRING,
        allowNULL: false,
        unique: true,

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  // eslint-disable-next-line arrow-body-style
  down: async (queryInterface) => {

    await queryInterface.dropTable('alunos');

  },
};
