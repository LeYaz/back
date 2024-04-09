// import { Card } from "src/card/entities/card.entity";
// import { Profile } from "src/profile/entities/profile.entity";
import { Liste } from "src/liste/entities/liste.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @OneToMany(() => Card, card => card.group)
    // cards: Card[];

    // @ManyToMany(() => Profile, profile => profile.group)
    // profile: Profile[];

    @ManyToMany(() => User, user => user.groups)
    users: User[];

    @OneToMany(() => Liste, liste => liste.group)
    listes: Liste[];
}
