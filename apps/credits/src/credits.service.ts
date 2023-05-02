import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditsService {
  getHello(): string {
    return 'Hello World!';
  }
}
