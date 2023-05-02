import { NestFactory } from '@nestjs/core';
import { CreditsModule } from './credits.module';

async function bootstrap() {
  const app = await NestFactory.create(CreditsModule);
  await app.listen(3000);
}
bootstrap();
