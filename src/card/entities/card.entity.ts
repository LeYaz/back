import { Group } from "src/group/entities/group.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryColumn()
    id: number;

    @Column()
    recto: string;

    @Column()
    verso: string;

    @ManyToOne(() => Group, group => group.cards)
    group: Group;

    @ManyToOne(() => Profile)
    createdBy: Profile;
    
}
