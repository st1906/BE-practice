import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Friend {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    lastName: string;

    @Column({nullable: false})
    nickname: string;

}
