import { Group } from "src/group/entities/group.entity";
import { ListeChamp } from "src/liste-champs/entities/liste-champ.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Depense {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
    
    @Column()
    amount: number;

    @Column()
    createdAt: Date;

    @ManyToMany(() => User, user => user.payedDepenses)
    by: User[];

    @ManyToMany(() => User, user => user.receivedDepenses)
    for: User[];

    @OneToMany(() => ListeChamp, listeChamp => listeChamp.depense)
    listeChamps: ListeChamp[];

    @ManyToOne(() => Group, group => group.depenses)
    group: Group;
}
