import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as Bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
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
}
