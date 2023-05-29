import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.getResponse()['message'];

    res.status(status).json({
      error: true,
      success: false,
      statusCode: status,
      message,
      data: {},
      timestamp: new Date().toLocaleString('es-MX'),
      path: req.url,
    });
  }
}
