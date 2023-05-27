import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
} from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';
import { Response } from 'express';
import { CurrentCredit } from '@app/common/decorators/current-credit.decorator';

@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createCreditDto: CreateCreditDto,
    @CurrentUser() user: UserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.creditsService.create(createCreditDto, user?._id, response);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.creditsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.creditsService.findOne(id, response);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCreditDto: UpdateCreditDto,
    @Res({ passthrough: true }) response: Response,
    @CurrentCredit() credit: CreateCreditDto,
  ) {
    console.log(credit);
    return this.creditsService.update(id, updateCreditDto, response);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.creditsService.remove(id);
  }
}
