import { Inject, Injectable } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { CreditsRepository } from './credits.repository';
import { DOCUMENTS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';

@Injectable()
export class CreditsService {
  constructor(
    private readonly creditsRepo: CreditsRepository, // @Inject(DOCUMENTS_SERVICE) documentsSvc: ClientProxy,
  ) {}

  async create(
    createCreditDto: CreateCreditDto,
    requester: string,
    response: Response,
  ) {
    const creditNew = await this.creditsRepo.create({
      ...createCreditDto,
      status: 1,
      timestamp: new Date(),
      requester,
      analyst: '537',
      supervisor: '234',
    });

    this.createCookie(response, creditNew?._id.toString());

    return creditNew;
  }

  async findAll() {
    return this.creditsRepo.find({});
  }

  async findOne(_id: string, response: Response) {
    const creditFind = await this.creditsRepo.findOne({ _id });
    this.createCookie(response, _id);
    return creditFind;
  }

  async update(_id: string, updateCreditDto: UpdateCreditDto, res: Response) {
    const creditUpdated = await this.creditsRepo.findOneAndUpdate(
      { _id },
      { $set: updateCreditDto },
    );

    this.createCookie(res, _id);

    return creditUpdated;
  }

  async remove(_id: string) {
    return this.creditsRepo.findOneAndDelete({ _id });
  }

  private createCookie(res: Response, creditId: string) {
    res.cookie('Credit', creditId, {
      httpOnly: true,
    });
  }
}
