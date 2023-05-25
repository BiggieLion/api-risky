import { IsString } from 'class-validator';

export class FilesDto {
  @IsString()
  fileType: string;

  @IsString()
  fileName: string;
}
