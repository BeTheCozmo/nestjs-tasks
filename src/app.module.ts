import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import env from './env/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: env.DB_USER,
      password: env.DB_PASS,
      database: env.DB_NAME,
      port: Number(env.DB_PORT),
      host: env.DB_HOST,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    TaskModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
