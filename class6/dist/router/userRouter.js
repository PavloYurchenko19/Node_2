"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.post('/users', userController_1.userController.createUser);
router.get('/getUsers', userController_1.userController.getUsers);
router.get('/getUsersWithPosts', userController_1.userController.getUsersWithPosts);
router.get('/usersAgeLessThen20', userController_1.userController.usersAgeLessThen20);
router.patch('/change/:id', userController_1.userController.change);
router.delete('/delete/:id', userController_1.userController.deleteUser);
router.get('/email/:email', userController_1.userController.getByEmail);
exports.userRouter = router;
//# sourceMappingURL=userRouter.js.map