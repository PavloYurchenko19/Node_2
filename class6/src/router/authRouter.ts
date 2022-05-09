import { Router } from 'express';
import { authController } from '../controller/authController';

const router = Router();

router.post('/registration', authController.registration);
// router.post('/login');
router.post('/logOut', authController.logout);
// router.post('/refresh');

export const authRouter = router;
