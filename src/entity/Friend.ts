import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "friend"})
export class Friend {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    lastName: string;

    @Column({nullable: true})
    nickname: string;
}
