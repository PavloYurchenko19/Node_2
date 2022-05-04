import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';
import { CommonFields } from './commonFields';
import { User } from './User';

export interface IPost {
    title: string;
    text: string;
    userId: number;
}

@Entity('Posts', { database: 'node' })
export class Post extends CommonFields implements IPost {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,

        unique: true,
    })
        title: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'int',

    })
        userId: number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
        user: User;
}
