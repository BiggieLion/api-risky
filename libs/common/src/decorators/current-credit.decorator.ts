import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { CreditsDocument } from 'apps/credits/src/models/credit.schema';

const getCurrentCredit = (ctx: ExecutionContext): Partial<CreditsDocument> => {
  return ctx.switchToHttp().getRequest().cookies?.Credit;
};

export const CurrentCredit = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => getCurrentCredit(ctx),
);
