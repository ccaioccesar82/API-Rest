import { Router } from 'express';
import { token } from '../controllers/TokenController';

const router = new Router();
router.post('/', token);

export default router;
