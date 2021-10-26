import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/students';
import User from '../models/user';
import Photo from '../models/photo';

const connection = new Sequelize(databaseConfig);

const models = [Aluno, User, Photo];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
