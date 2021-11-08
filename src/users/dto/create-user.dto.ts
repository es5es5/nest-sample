import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: 'Louis', description: 'The first name of the User' })
  readonly firstName: string;

  @ApiProperty()
  @ApiProperty({ example: 'Vuitton', description: 'The last name of the User' })
  readonly lastName: string;
}
