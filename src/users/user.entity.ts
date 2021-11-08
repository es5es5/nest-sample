import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  /**
   * The name of the User
   * @example Louis
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({ example: 1, description: 'The firstName of the User' })
  firstName: string;
  
  @Column()
  @ApiProperty({ example: 1, description: 'The lastName of the User' })
  lastName: string;
  
  @Column({ default: true })
  @ApiProperty({ example: 1, description: 'The active column' })
  isActive: boolean;
}
