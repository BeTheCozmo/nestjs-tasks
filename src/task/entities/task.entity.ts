import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { priorities, Priority, status, Status } from '../dto/types';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false})
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: status,
    default: "todo"
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: priorities,
    default: "low"
  })
  priority?: Priority;

  @ManyToOne(() => User, (user) => user.tasks, { nullable: false })
  user: User;
}