import { Module } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreditsController } from './credits.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { CreditsRepository } from './credits.repository';
import { CreditsDocument, CreditsSchema } from './models/credit.schema';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';

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
      }),
    }),
  ],
  controllers: [CreditsController],
  providers: [CreditsService, CreditsRepository],
})
export class CreditsModule {}
