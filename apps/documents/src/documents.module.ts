import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
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
  controllers: [DocumentsController],
  providers: [
    DocumentsService,
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
export class DocumentsModule {}
