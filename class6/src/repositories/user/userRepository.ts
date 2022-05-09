import {
    DeleteResult,
    EntityRepository, getManager, Repository, UpdateResult,
} from 'typeorm';
import { IUser, User } from '../../entity/User';
import { IUserRepository } from './userRepository.interface';

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async createdUser(user:IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }

    public async getUsers():Promise<IUser[]> {
        return getManager().getRepository(User).find();
    }

    public async getUsersWithPosts():Promise<IUser[]> {
        return getManager().getRepository(User).find({ relations: ['posts'] });
    }

    public async usersAgeLessThen20():Promise<IUser[]> {
        return getManager().getRepository(User).createQueryBuilder('user').where('user.age < 20')
            .getMany();
    }

    public async change(id:number, email:string, age:number):Promise<UpdateResult> {
        return getManager().getRepository(User).update({ id }, {
            email,
            age,
        });
    }

    public async deleteUser(id: number):Promise<DeleteResult> {
        return getManager().getRepository(User).delete({ id });
    }

    public async getUserByEmail(email:string):Promise<IUser | undefined> {
        return getManager().getRepository(User).createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }
}

export const userRepository = new UserRepository();
