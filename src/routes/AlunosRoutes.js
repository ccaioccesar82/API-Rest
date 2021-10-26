import { Router } from 'express';
import AlunoControll from '../controllers/AlunoController';
import { tokenValidator } from '../middlewares/loginVerification';



const router = new Router();

router.get('/', tokenValidator, AlunoControll.show);

router.post('/', tokenValidator, AlunoControll.create);
router.put('/:id', tokenValidator, AlunoControll.update);
router.delete('/:id', tokenValidator, AlunoControll.delete);


export default router;
