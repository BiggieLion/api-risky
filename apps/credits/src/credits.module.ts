import { Module } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreditsController } from './credits.controller';
import { DatabaseModule } from '@app/common';
import { CreditsRepository } from './credits.repository';
import { CreditsDocument, CreditsSchema } from './models/credit.schema';

@Module({
  imports: [
    DatabaseModule.forFeature([
      { name: CreditsDocument.name, schema: CreditsSchema },
    ]),
  ],
  controllers: [CreditsController],
  providers: [CreditsService, CreditsRepository],
})
export class CreditsModule {}
