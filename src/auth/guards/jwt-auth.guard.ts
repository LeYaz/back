import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { AuthGuard } from '@nestjs/passport';
  
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') {
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
      // Get the request from context
      const req = context.switchToHttp().getRequest();
      // Throw an exception if no user found or an internal error occured.
      if (err || !user) {
        throw new UnauthorizedException();
      }
      // Otherwise return the payload (request.user)
      return user;
    }
  }