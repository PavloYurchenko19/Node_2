import { DeleteResult, UpdateResult } from 'typeorm';
import { IUser } from '../entity/User';
import { userRepository } from '../repositories/user/userRepository';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        const createdUser = await userRepository.createdUser(user);
        return createdUser;
    }

    public async getUsers():Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async getUsersWithPosts(): Promise<IUser[]> {
        return userRepository.getUsersWithPosts();
    }

    public async usersAgeLessThen20(): Promise<IUser[]> {
        return userRepository.usersAgeLessThen20();
    }

    public async change(id:string, email:string, age:number):Promise<UpdateResult> {
        return userRepository.change(+id, email, age);
    }

    public async deleteUser(id:string): Promise<DeleteResult> {
        return userRepository.deleteUser(+id);
    }
}

export const userService = new UserService();
