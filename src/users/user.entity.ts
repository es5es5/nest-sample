import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  /**
   * The name of the User
   * @example Louis Vuitton
   */
  @PrimaryColumn()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @ApiProperty({ example: 'Louis', description: 'The firstName of the User' })
  firstName: string;

  @Column()
  @ApiProperty({ example: 'Vuitton', description: 'The lastName of the User' })
  lastName: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column({ default: true })
  @ApiProperty()
  isActive: boolean;
}
