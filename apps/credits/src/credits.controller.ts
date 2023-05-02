import { Controller, Get } from '@nestjs/common';
import { CreditsService } from './credits.service';

@Controller()
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Get()
  getHello(): string {
    return this.creditsService.getHello();
  }
}
