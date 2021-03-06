import { Router } from 'express';
import { userRouter } from './userRouter';

const router = Router();

router.use('/', userRouter);

export const apiRouter = router;
