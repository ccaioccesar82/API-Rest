import { Router } from 'express';
import { index } from '../controllers/HomeController';

const router = new Router();
router.get('/', index);

export default router;
