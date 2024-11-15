import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'antony',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Senha do usuário',
    example: 'password',
  })
  password: string;
}