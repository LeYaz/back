import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
       // Define the keys for username and password expected to find
       // in the request body
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    // Validate credentials
    const user = await this.authService.validateCredentials(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    // Be careful, this will return the whole database result
    // including password hash and possibly other critical data.
    // Do not return this directly to the response. Instead use a 
    // ClassSerializer to @Exclude() properties.
    
    return user;
  }
}