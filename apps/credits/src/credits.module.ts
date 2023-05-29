import { Module } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreditsController } from './credits.controller';
import {
  AUTH_SERVICE,
  DOCUMENTS_SERVICE,
  DatabaseModule,
  HttpExceptionsFilter,
  LoggerModule,
  ResponseInterceptor,
} from '@app/common';
import { CreditsRepository } from './credits.repository';
import { CreditsDocument, CreditsSchema } from './models/credit.schema';
import * as Joi from 'joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: CreditsDocument.name, schema: CreditsSchema },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        AUTH_HOST: Joi.string().required(),
        AUTH_PORT: Joi.number().required(),
        // DOCUMENTS_HOST: Joi.string().required(),
        // DOCUMENTS_PORT: Joi.number().required(),
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configSvc: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configSvc.get('AUTH_HOST'),
            port: configSvc.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
      // {
      //   name: DOCUMENTS_SERVICE,
      //   useFactory: (configSvc: ConfigService) => ({
      //     transport: Transport.TCP,
      //     options: {
      //       host: configSvc.get('DOCUMENTS_HOST'),
      //       port: configSvc.get('DOCUMENTS_PORT'),
      //     },
      //   }),
      //   inject: [ConfigService],
      // },
    ]),
  ],
  controllers: [CreditsController],
  providers: [
    CreditsService,
    CreditsRepository,
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
export class CreditsModule {}
