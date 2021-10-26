module.exports = {
  // eslint-disable-next-line arrow-body-style
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('photos', {

      id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNULL: false,

      },

      filename: {
        type: Sequelize.STRING,
        allowNULL: false,

      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNULL: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
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

    await queryInterface.dropTable('photos');

  },
};
