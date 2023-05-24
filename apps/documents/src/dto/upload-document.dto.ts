import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UploadDocumentDto {
  @IsString()
  @IsNotEmpty()
  documentFormat: string;

  @IsString()
  @IsNotEmpty()
  credit: string;

  @IsString()
  @IsNotEmpty()
  requester: string;

  @IsOptional()
  @IsString()
  documentRoute: string;
}
