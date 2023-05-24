import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class CreditsDocument extends AbstractDocument {
  @Prop()
  status: number;

  @Prop()
  timestamp: Date;

  @Prop()
  requestDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  requester: string;

  @Prop()
  analyst: string;

  @Prop()
  supervisor: string;

  @Prop()
  ammount: number;

  @Prop()
  creditType: string;

  @Prop()
  documentsId: string;
}

export const CreditsSchema = SchemaFactory.createForClass(CreditsDocument);
