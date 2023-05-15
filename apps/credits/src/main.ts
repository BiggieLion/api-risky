import { NestFactory } from '@nestjs/core';
import { CreditsModule } from './credits.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as coockieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(CreditsModule);
  const configSvc = app.get(ConfigService);
  app.use(coockieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));

  await app.listen(configSvc.get('PORT'));
}
bootstrap();
