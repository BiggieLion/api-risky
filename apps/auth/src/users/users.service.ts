import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as Bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    await this.validateUserExists(createUserDto);
    return this.usersRepo.create({
      ...createUserDto,
      password: await Bcrypt.hash(createUserDto.password, 10),
    });
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepo.findOne({ email });
    const isPassValid = await Bcrypt.compare(password, user.password);
    if (!isPassValid) {
      throw new UnauthorizedException('Email or Passwords not valid');
    }
    return user;
  }

  async getUser(getUserDto: GetUserDto) {
    return this.usersRepo.findOne(getUserDto);
  }

  private async validateUserExists(createUserDto: CreateUserDto) {
    try {
      await this.usersRepo.findOne({ email: createUserDto.email });
    } catch (error) {
      return;
    }

    throw new UnprocessableEntityException('Email already exists');
  }
}
