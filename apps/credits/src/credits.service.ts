import { Inject, Injectable } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { CreditsRepository } from './credits.repository';
import { DOCUMENTS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CreditsService {
  constructor(
    private readonly creditsRepo: CreditsRepository,
    @Inject(DOCUMENTS_SERVICE) documentsSvc: ClientProxy,
  ) {}

  async create(createCreditDto: CreateCreditDto, requester: string) {
    return this.creditsRepo.create({
      ...createCreditDto,
      status: 1,
      timestamp: new Date(),
      requester,
      analyst: '534',
      supervisor: '234',
    });
  }

  async findAll() {
    return this.creditsRepo.find({});
  }

  async findOne(_id: string) {
    return this.creditsRepo.findOne({ _id });
  }

  async update(_id: string, updateCreditDto: UpdateCreditDto) {
    return this.creditsRepo.findOneAndUpdate(
      { _id },
      { $set: updateCreditDto },
    );
  }

  async remove(_id: string) {
    return this.creditsRepo.findOneAndDelete({ _id });
  }
}
