import { Card } from "src/card/entities/card.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
//TODO ajouter le ration success/try
@Entity()
export class Try {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Profile)
    profile: Profile;

    @ManyToOne(() => Card)
    card: Card;

    @Column()
    date: Date;

    @Column()
    success: boolean;

    @Column()
    nbTry: number;

    @Column()
    nbSuccess: number;

    @Column()
    nextTry: Date;
}
