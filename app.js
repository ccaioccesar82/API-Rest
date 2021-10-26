import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import './src/database';
import HomeRoutes from './src/routes/HomeRoute';
import UserRoutes from './src/routes/UserRoute';
import TokenRoutes from './src/routes/TokenRoutes';
import AlunosRoutes from './src/routes/AlunosRoutes';
import PhotoRoutes from './src/routes/PhotoRoute';

dotenv.config();

class App {

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){

    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));

  }

  routes(){

    this.app.use('/', HomeRoutes);
    this.app.use('/users/', UserRoutes);
    this.app.use('/alunos/', AlunosRoutes);
    this.app.use('/token/', TokenRoutes);
    this.app.use('/photos/', PhotoRoutes);
  }
}

export default new App().app;
