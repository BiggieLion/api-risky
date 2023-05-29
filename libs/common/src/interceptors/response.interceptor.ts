import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const statusCode = ctx.switchToHttp().getResponse().statusCode;

    return next.handle().pipe(
      map((data: any) => ({
        success: true,
        error: false,
        statusCode,
        data,
      })),
    );
  }
}
