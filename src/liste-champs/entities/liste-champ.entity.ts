import { Liste } from "src/liste/entities/liste.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ListeChamp {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    libelle: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    status: boolean;

    @ManyToOne(() => Liste, liste => liste.listeChamps)
    liste: Liste;
}
