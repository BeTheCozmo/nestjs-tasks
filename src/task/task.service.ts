import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto & {userId: number}) {
    return await this.taskRepository.insert({
      description: createTaskDto.description,
      priority: createTaskDto.priority,
      status: createTaskDto.status,
      title: createTaskDto.title,
      user: {
        id: createTaskDto.userId
      }
    });
  }

  async findAll(filter?: { userId: number }) {
    return await this.taskRepository.find({
      where: {
        user: {
          id: filter.userId
        }
      }
    });
  }

  async findOne(id: string) {
    const result = await this.taskRepository.findOne({
      where: {
        id
      }
    });
    if (!result) throw new NotFoundException(`Task with ID ${id} not found`);
    return result;
  }

  async update(id: string, {id: _id, ...updateTaskDto}: UpdateTaskDto) {
    await this.taskRepository.update(id, updateTaskDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return { message: 'Task deleted successfully' };
  }
}