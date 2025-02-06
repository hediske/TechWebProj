import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { TokenStatus } from '../enum/tokenStatus';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id_token: number;

  @Column()
  token: string;

  @Column({
    type: 'enum',
    enum: TokenStatus,
    default: TokenStatus.ACTIVE,
  })
  status: TokenStatus;

  @ManyToOne(() => User, user => user.tokens) // id_user is a fk (ORM rak7a automatically)
  user: User;

  @CreateDateColumn() // now - date mte3 creation cmp m3a FIXED time = STATUS mte3 token
  createdAt: Date;   //createdAt database ta3ti wa7dha timestamp
}