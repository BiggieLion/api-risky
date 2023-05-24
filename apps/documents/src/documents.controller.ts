import { Controller } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UploadDocumentDto } from './dto/upload-document.dto';

@Controller()
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @MessagePattern('upload_document')
  async uploadDocument(@Payload() data: UploadDocumentDto) {
    return this.documentsService.uploadDocument(data);
  }
}
