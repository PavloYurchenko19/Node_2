import { Column, Entity, OneToMany } from 'typeorm';
import { CommonFields } from './commonFields';
import { Post } from './Post';

export interface IUser {
    firstName?: string;
    lastName: string;
    age?: number;
    phone: string;
    email: string;
    password: string;
    posts: any[];
}

@Entity('Users', { database: 'node' })
export class User extends CommonFields implements IUser {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        firstName?: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
    })
        age?: number;

    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 250,
        unique: true,
        nullable: false,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        password: string;

    @OneToMany(() => Post, (post) => post.user)
        posts: Post[];
}
