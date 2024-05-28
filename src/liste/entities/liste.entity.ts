import { Group } from "src/group/entities/group.entity";
import { ListeChamp } from "src/liste-champs/entities/liste-champ.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Liste {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToOne(() => Group, group => group.listes)
    group: Group;

    @OneToMany(() => ListeChamp, listeChamp => listeChamp.liste, {
        onDelete: 'CASCADE',
    })
    listeChamps: ListeChamp[];
}
