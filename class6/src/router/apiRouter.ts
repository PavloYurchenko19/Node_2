import { Router } from 'express';
import { userRouter } from './userRouter';
import { authRouter } from './authRouter';

const router = Router();

router.use('/', userRouter);
router.use('/auth', authRouter);

export const apiRouter = router;
