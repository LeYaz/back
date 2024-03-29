import { DynamicModule, Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './auth.guard';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { PassportModule } from '@nestjs/passport';
import { IAuthModuleConfig } from './models/auth-module-config-interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshStrategy,
  ],
  exports: [AuthService],
})
@Global()
export class AuthModule {
  static forRoot(config: IAuthModuleConfig): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule,
        JwtModule.register({
          secret: config.jwtSecret,
        }),
      ],
      controllers: [
        AuthController,
      ],
            providers: [
              {
                provide: 'AUTH_MODULE_CONFIG',
                useValue: config,
              },
              AuthService,
              LocalStrategy,
              JwtStrategy,
              JwtRefreshStrategy,
            ],
      exports: [AuthService, JwtStrategy, JwtRefreshStrategy],
    };
  }
}