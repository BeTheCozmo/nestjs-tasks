import { Controller, Post, Body, Request, UseGuards, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  @ApiBody({type: CreateUserDto})
  @ApiResponse({
    status: 200, 
    description: 'Realizar login do usuário',
    headers: {
      'Authorization': {
        description: 'Token Bearer de autorização.'
      }
    },
  })
  async login(@Request() req, @Res() res: Response) {
    const response = await this.authService.login(req.user);
    res.set('Authorization', `Bearer ${response.access_token}`);
    return res.status(200).json(response);
  }
  
  @Post('register')
  @HttpCode(201)
  @ApiBody({type: CreateUserDto})
  @ApiResponse({
    status: 201, 
    description: 'Realizar registro do usuário',
    headers: {
      'Authorization': {
        description: 'Token Bearer de autorização.'
      }
    },
  })
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const user = await this.userService.create(createUserDto);
    const response = await this.authService.login(user);
    res.set('Authorization', `Bearer ${response.access_token}`);
    return res.status(201).json(response);
  }
}