"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../srvices/userService");
class UserController {
    async createUser(req, res) {
        const createdUser = await userService_1.userService.createUser(req.body);
        return res.json(createdUser);
    }
    async getUsers(req, res) {
        const users = await userService_1.userService.getUsers();
        console.log(users);
        return res.json(users);
    }
    async getUsersWithPosts(req, res) {
        const usersWithPosts = await userService_1.userService.getUsersWithPosts();
        console.log(usersWithPosts);
        return res.json(usersWithPosts);
    }
    async usersAgeLessThen20(req, res) {
        const allUsersAgeLessThen20 = await userService_1.userService.usersAgeLessThen20();
        console.log(allUsersAgeLessThen20);
        return res.json(allUsersAgeLessThen20);
    }
    async change(req, res) {
        const { email, age } = req.body;
        const { id } = req.params;
        const changedUser = await userService_1.userService.change(id, email, age);
        return res.json(changedUser);
    }
    async deleteUser(req, res) {
        const { id } = req.params;
        const deletedUser = await userService_1.userService.deleteUser(id);
        return res.json(deletedUser);
    }
    async getByEmail(req, res) {
        const { email } = req.params;
        console.log(email);
        const userByEmail = await userService_1.userService.getUserByEmail(email);
        return res.json(userByEmail);
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map