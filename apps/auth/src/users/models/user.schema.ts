import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  rfc: string;

  @Prop()
  curp: string;

  @Prop()
  personType: number;

  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
