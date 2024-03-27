import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, Inject } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh.guard';
import { IAuthModuleConfig } from './models/auth-module-config-interface';
// import { AuthGuard } from './auth.guard';
// import { Public } from './public.decorator';

// @Controller('auth')
// export class AuthController {
//     constructor(private authService: AuthService){}

//     @Public()
//     @HttpCode(HttpStatus.OK)
//     @Post('login')
//     signIn(@Body() user: CreateUserDto){
//         return this.authService.signIn(user.email, user.password);
//     }

//     @UseGuards(AuthGuard)
//     @Get('profile')
//     getProfile(@Request() req) {
//     return req.user;
//   }

// }
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    // Optional. If you are using a monorepo you may need to pass
    // specific configuration for the current app that injects this module.
    @Inject('AUTH_MODULE_CONFIG') private moduleConfig: IAuthModuleConfig
  ) {}
  
  // LOGIN
  // Use the LocalAuthGuard for verifying credentials
  @UseGuards(LocalAuthGuard)
  @HttpCode(200) 
  @Post('login')
  async login(@Request() req : Request): Promise<any> {
    return await this.authService.login(req.user.id);
  }
  
  // Refresh Token
  // Use the JwtRefreshAuthGuard strategy
  @Get('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  @HttpCode(200)
  async refreshToken(@Request() req: Request){
    return {
      // Generate a new access token based on the same payload
      // we get from the refresh token.
      access: this.authService.generateAccessToken({
        id: req.user.id,
        email: req.user.email,
      }),
    };
  }

  // Endpoint to get user's profile or additional info.
  // This will be called immediately after successfull login
  // @Get('whoami')
  // @UseGuards(JwtAuthGuard)
  // // Optional: Use a serializer to exclude specific properties
  // @UseInterceptors(ClassSerializerInterceptor)
  // async whoami(@JwtPayload() payload: IJwtPayload): Promise<IAuthUser | null> {
  //   // An example: get a user that is active by id.
  //   // We don't want to throw an exception here instead just return null.
  //   // We will need our Angular app to check the response if is null and force
  //   // logout on the client side. Throwing an error here may cause the Angular
  //   // interceptor to keep retrying to get a new token. More on that later.
  //   return await this.authService.getActiveUserById(payload.id);
  // }

}