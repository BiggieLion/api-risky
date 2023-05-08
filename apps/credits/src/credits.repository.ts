import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { CreditsDocument } from './models/credit.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CreditsRepository extends AbstractRepository<CreditsDocument> {
  protected readonly logger = new Logger(CreditsDocument.name);

  constructor(
    @InjectModel(CreditsDocument.name) creditModel: Model<CreditsDocument>,
  ) {
    super(creditModel);
  }
}
