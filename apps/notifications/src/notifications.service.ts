import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  async notifyViaEmail(data: NotifyEmailDto) {
    console.log(data);
  }
}
