import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  /**
   * The name of the User
   * @example Louis Vuitton
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ example: 'Louis', description: 'The firstName of the User' })
  firstName: string;
  
  @Column()
  @ApiProperty({ example: 'Vuitton', description: 'The lastName of the User' })
  lastName: string;
  
  @Column({ default: true })
  @ApiProperty()
  isActive: boolean;
}
