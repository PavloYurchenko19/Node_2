import { DeleteResult } from 'typeorm';
import { IUser } from '../../entity/User';

export interface IUserRepository {
    createdUser(user: IUser): Promise<IUser>;
    getUsers(): Promise<IUser[]>;
    getUsersWithPosts():Promise<IUser[]>;
    usersAgeLessThen20():Promise<IUser[]>;
    deleteUser(id: number):Promise<DeleteResult>;
}
