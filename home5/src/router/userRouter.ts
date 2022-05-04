import { Router } from 'express';
import { userController } from '../controller/userController';

const router = Router();

router.post('/users', userController.createUser);
router.get('/getUsers', userController.getUsers);
router.get('/getUsersWithPosts', userController.getUsersWithPosts);
router.get('/usersAgeLessThen20', userController.usersAgeLessThen20);
router.patch('/change/:id', userController.change);
router.delete('/delete/:id', userController.deleteUser);

export const userRouter = router;
