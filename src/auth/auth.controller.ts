import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, Inject } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh.guard';
import { IAuthModuleConfig } from './models/auth-module-config-interface';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtPayload } from './decorators/jwt-payload.decorator';
import { ProfileService } from 'src/profile/profile.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    // Optional. If you are using a monorepo you may need to pass
    // specific configuration for the current app that injects this module.
    @Inject('AUTH_MODULE_CONFIG') private moduleConfig: IAuthModuleConfig
  ) {}

  // Register a new user
  @Post('register')
  @HttpCode(201)
  async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.authService.createAccount(createUserDto);
  }
  
  // LOGIN
  // Use the LocalAuthGuard for verifying credentials
  @UseGuards(LocalAuthGuard)
  @HttpCode(200) 
  @Post('login')
  async login(@Request() req ): Promise<any> {
    return await this.authService.login(req.user.id);
  }
  
  // Refresh Token
  // Use the JwtRefreshAuthGuard strategy
  @Get('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  @HttpCode(200)
  async refreshToken(@Request() req){
    return {
      // Generate a new access token based on the same payload
      // we get from the refresh token.
      access: await this.authService.generateAccessToken({
        id: req.user.id,
        email: req.user.email,
      }),
    };
  }

  //TODO get profile
  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async whoami(@JwtPayload() payload){
    const profile = await this.profileService.findByUserId(payload.id);
    if(!profile){
      return {
        id: payload.id,
        userName: 'Unknown',
      };
    }
    return {
      id: payload.id,
      userName: profile.userName,
    };
  }


}