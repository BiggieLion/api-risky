import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCreditDto {
  @IsOptional()
  @IsNumber()
  status: number;

  @IsDate()
  @Type(() => Date)
  requestDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsOptional()
  @IsString()
  requester: string;

  @IsOptional()
  @IsString()
  analyst: string;

  @IsOptional()
  @IsString()
  supervisor: string;

  @IsNumber()
  @IsNotEmpty()
  ammount: number;

  @IsString()
  @IsNotEmpty()
  creditType: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  documentsId: string;
}
