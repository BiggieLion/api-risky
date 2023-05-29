import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import {
  HttpExceptionsFilter,
  LoggerModule,
  ResponseInterceptor,
} from '@app/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        SECRET_RISKY: Joi.string().required(),
        JWT_EXP: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        TCP_PORT: Joi.number().required(),
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (configSvc: ConfigService) => ({
        secret: configSvc.get<string>('SECRET_RISKY'),
        signOptions: {
          expiresIn: `${configSvc.get('JWT_EXP')}s`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AuthModule {}
