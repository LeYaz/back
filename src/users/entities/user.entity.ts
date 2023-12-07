import { Group } from "src/group/entities/group.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(()=> Profile, profile => profile.user)
    profile: Profile[];

}
