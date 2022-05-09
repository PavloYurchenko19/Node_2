import { DeleteResult, UpdateResult } from 'typeorm';
import bcrypt from 'bcrypt';
import { IUser } from '../entity/User';
import { userRepository } from '../repositories/user/userRepository';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };
        const createdUser = await userRepository.createdUser(dataToSave);
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

    public async getUserByEmail(email:string):Promise<IUser | undefined> {
        return userRepository.getUserByEmail(email);
    }

    private async _hashPassword(password:string):Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();
