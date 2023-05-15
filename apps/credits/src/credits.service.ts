import { Injectable } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { CreditsRepository } from './credits.repository';

@Injectable()
export class CreditsService {
  constructor(private readonly creditsRepo: CreditsRepository) {}

  create(createCreditDto: CreateCreditDto, requester: string) {
    return this.creditsRepo.create({
      ...createCreditDto,
      status: 1,
      timestamp: new Date(),
      requester,
      analyst: '534',
      supervisor: '234',
    });
  }

  findAll() {
    return this.creditsRepo.find({});
  }

  findOne(_id: string) {
    return this.creditsRepo.findOne({ _id });
  }

  update(_id: string, updateCreditDto: UpdateCreditDto) {
    return this.creditsRepo.findOneAndUpdate(
      { _id },
      { $set: updateCreditDto },
    );
  }

  remove(_id: string) {
    return this.creditsRepo.findOneAndDelete({ _id });
  }
}
