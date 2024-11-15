import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards, Request, Req, Response, HttpStatus, HttpCode, Header } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IAuthRequest } from 'src/auth/request.interface';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiResponse({ status: 201, description: 'Criar tarefa' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Token Bearer de autenticação',
    required: true
  })
  create(
    @Req() req: IAuthRequest,
    @Body() createTaskDto: CreateTaskDto
  ) {
    console.log(req.user);
    return this.taskService.create({...createTaskDto, userId: req.user.userId});
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  @ApiHeader({
    name: 'Authorization',
    description: 'Token Bearer de autenticação',
    required: true
  })
  @ApiResponse({ status: 200, description: 'Ver todas as tarefas do usuário' })
  findAll(
    @Request() req: IAuthRequest,
  ) {
    const { userId } = req.user;
    return this.taskService.findAll({ userId });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'Ver todas as tarefas do usuário' })
  @ApiHeader({
    name: 'Authorization',
    description: 'Token Bearer de autenticação',
    required: true
  })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiHeader({
    name: 'Authorization',
    description: 'Token Bearer de autenticação',
    required: true
  })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiHeader({
    name: 'Authorization',
    description: 'Token Bearer de autenticação',
    required: true
  })
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}