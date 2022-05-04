import { Request, Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { IUser } from '../entity/User';
import { userService } from '../srvices/userService';

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response<IUser>> {
        const createdUser = await userService.createUser(req.body);
        return res.json(createdUser);
    }

    public async getUsers(req: Request, res: Response):Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        console.log(users);
        return res.json(users);
    }

    public async getUsersWithPosts(req: Request, res: Response): Promise<Response<IUser[]>> {
        const usersWithPosts = await userService.getUsersWithPosts();
        console.log(usersWithPosts);
        return res.json(usersWithPosts);
    }

    public async usersAgeLessThen20(req: Request, res: Response): Promise<Response<IUser[]>> {
        const allUsersAgeLessThen20 = await userService.usersAgeLessThen20();
        console.log(allUsersAgeLessThen20);
        return res.json(allUsersAgeLessThen20);
    }

    public async change(req:Request, res:Response):Promise<Response<UpdateResult>> {
        const { email, age } = req.body;
        const { id } = req.params;
        const changedUser = await userService.change(id, email, age);
        return res.json(changedUser);
    }

    public async deleteUser(req:Request, res:Response):Promise<Response<DeleteResult>> {
        const { id } = req.params;
        const deletedUser = await userService.deleteUser(id);
        return res.json(deletedUser);
    }
}

export const userController = new UserController();
