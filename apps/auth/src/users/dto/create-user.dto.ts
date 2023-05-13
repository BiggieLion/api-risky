import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateIf,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[ñ\w])(?=.*\d)(?=.*[!()$%&*=+])[ñ\w\d!()$%&*=+]{8,}$/, {
    message:
      'Password should have at leat one uppercase leter, one lowercase, one number and one special character (!()$%&*=+)',
  })
  password: string;

  @IsNotEmpty()
  @IsNumber()
  @IsIn([1, 2])
  personType: number;

  @IsNotEmpty()
  @IsString() // 1 -> natural person, 2 -> legal person
  @Matches(/^(?:[A-Z]{4}|[A-Z]{3})\d{6}[a-zA-Z\d]{3}$/, {
    message: 'RFC not valid for either natural or legal persons',
  })
  rfc: string;

  @IsOptional()
  @IsString()
  @Matches(/^[A-Z]{4}\d{6}[A-Z]{6}((\d{2})|([A-Z]\d))$/, {
    message: 'CURP not valid',
  })
  curp: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\d]{10}$/, {
    message: 'Phone not valid (10 digits)',
  })
  phone: string;
}
