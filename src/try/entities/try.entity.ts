import { Card } from "src/card/entities/card.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Try {

    @PrimaryColumn()
    id: number;

    @ManyToOne(() => Profile)
    profile: Profile;

    @ManyToOne(() => Card)
    card: Card;

    @Column()
    date: Date;

    @Column()
    result: boolean;

    @Column()
    nbTry: number;

    @Column()
    nextTry: Date;
}
