import { Depense } from "src/depense/entities/depense.entity";
import { Group } from "src/group/entities/group.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToMany(() => Group, group => group.users)
    @JoinTable()
    groups: Group[];

    @ManyToMany(() => Depense, depense => depense.by)
    @JoinTable()
    payedDepenses: Depense[];

    @ManyToMany(() => Depense, depense => depense.for)
    @JoinTable()
    receivedDepenses: Depense[];

}
