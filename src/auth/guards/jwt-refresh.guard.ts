import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { AuthGuard } from '@nestjs/passport';
  
  @Injectable()
  // Same strategy as JWT only we extend AuthGuard('jwt-refresh') strategy
  export class JwtRefreshAuthGuard extends AuthGuard('jwt-refresh') {
    override async canActivate(context: ExecutionContext): Promise<boolean> {
      return super.canActivate(context) as boolean;
    }
  
    override handleRequest<IJwtToken>(
      err: unknown,
      user: IJwtToken,
      info: unknown,
      context: ExecutionContext,
      status?: unknown
    ): IJwtToken {
      const req = context.switchToHttp().getRequest();
      if (err || !user) {
        throw new UnauthorizedException();
      }
      return user;
    }
  }