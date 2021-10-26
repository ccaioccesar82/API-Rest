import { Router } from 'express';
import UseControll from '../controllers/UserController';
import { tokenValidator } from '../middlewares/loginVerification';

const controll = new UseControll();
const router = new Router();

router.get('/', tokenValidator, controll.show);

router.post('/', controll.create);
router.put('/', tokenValidator, controll.update);
router.delete('/', tokenValidator, controll.delete);


export default router;
