import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { priorities, Priority, Status, status } from './types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Título',
    example: 'Fazer almoço',
  })
  title: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'Descrição',
    example: 'As crianças precisam comer',
  })
  description?: string;

  @IsOptional()
  @IsString()
  @IsEnum(status)
  @ApiPropertyOptional({
    description: 'Status da tarefa',
    example: 'done',
    enum: status
  })
  status?: Status;

  @IsOptional()
  @IsString()
  @IsEnum(priorities)
  @ApiPropertyOptional({
    description: 'Prioridade da tarefa',
    example: 'high',
    enum: priorities
  })
  priority?: Priority;
}