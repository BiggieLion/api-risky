import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { CurrentUser, JwtAuthGuard, UserDto } from '@app/common';

@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createCreditDto: CreateCreditDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.creditsService.create(createCreditDto, user?._id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.creditsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.creditsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCreditDto: UpdateCreditDto,
  ) {
    return this.creditsService.update(id, updateCreditDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.creditsService.remove(id);
  }
}
