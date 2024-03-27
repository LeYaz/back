import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IAuthModuleConfig } from "../models/auth-module-config-interface";
import { IJwtPayload } from "../models/jwt-payload-interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject('AUTH_MODULE_CONFIG') readonly moduleConfig: IAuthModuleConfig
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // Extract JWT token from Authentication Header
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      // Use the secret key for JWT signing
      secretOrKey: moduleConfig.jwtSecret,
    });
  }

  async validate(payload: IJwtPayload) {
    return payload;
  }
}