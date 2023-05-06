import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCreditDto {
  @IsDate()
  @Type(() => Date)
  requestDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsNumber()
  @IsNotEmpty()
  ammount: number;

  @IsString()
  @IsNotEmpty()
  creditType: string;
}
