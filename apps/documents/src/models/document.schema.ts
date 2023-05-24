import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class DocumentsDocuments extends AbstractDocument {
  @Prop()
  credit: string;

  @Prop()
  documentFormat: string;

  @Prop()
  documentRoute: string;

  @Prop()
  requester: string;
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentsDocuments);
