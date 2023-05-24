import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentsService {
  getHello(): string {
    return 'Hello World!';
  }

  async uploadDocument(data: any) {
    return 'test';
  }
}
