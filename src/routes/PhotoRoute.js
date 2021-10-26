import { Router } from 'express';
import { tokenValidator } from '../middlewares/loginVerification';
import { create } from '../controllers/PhotoController';

const router = new Router();
router.post('/', tokenValidator, create);

export default router;
