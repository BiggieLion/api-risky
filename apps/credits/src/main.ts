import { NestFactory } from '@nestjs/core';
import { CreditsModule } from './credits.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(CreditsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  const configSvc = app.get(ConfigService);
  await app.listen(configSvc.get('PORT'));
}
bootstrap();
