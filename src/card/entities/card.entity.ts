import { Group } from "src/group/entities/group.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
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
