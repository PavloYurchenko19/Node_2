import {
    Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';

export interface ICommonField {
    id: number;
    createdAt: string;
    deletedAt?: string;

}

export class CommonFields implements ICommonField {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({ type: 'timestamp' })
        createdAt: string;

    @Column()
    @DeleteDateColumn({ type: 'timestamp' })
        deletedAt?: string;
}
