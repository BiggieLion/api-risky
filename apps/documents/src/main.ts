import { NestFactory } from '@nestjs/core';
import { DocumentsModule } from './documents.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import * as coockieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(DocumentsModule);
  const configSvc = app.get(ConfigService);
  app.use(coockieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));

  await app.listen(configSvc.get('PORT'));
}
bootstrap();
