import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import {
  HttpExceptionsFilter,
  LoggerModule,
  ResponseInterceptor,
} from '@app/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        TCP_PORT: Joi.number().required(),
      }),
    }),
    LoggerModule,
  ],
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
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
export class NotificationsModule {}
