import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { CurrentUser } from '../decorators/current-user.decorator';
import { UserDocument } from './models/user.schema';
import { JwtGuard } from '../guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSvc: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersSvc.create(createUserDto);
  }

  @Get('all')
  @UseGuards(JwtGuard)
  async getUser(@CurrentUser() user: UserDocument) {
    return user;
  }
}
