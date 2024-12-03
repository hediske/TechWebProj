import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserRole, UserStatus } from '../enum/userType';
import { Token } from 'src/token/token.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;
  @OneToMany(() => Token, token => token.user)
  tokens: Token[]; // ORM dima lazyload relationships yaani tawa ana field mte3 tokens te3 kol user (no need to query it manually)
}