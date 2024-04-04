import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IJwtPayload } from '../models/jwt-payload-interface';

export const JwtPayload = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    // Get the request object from the current context
    // and return the user property (which contains our payload)
    return context.switchToHttp().getRequest().user as IJwtPayload;
  }
);

// Usage: @JwtPayload() payload: IJwtPayload