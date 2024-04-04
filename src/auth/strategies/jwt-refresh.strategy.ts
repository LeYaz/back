import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IAuthModuleConfig } from "../models/auth-module-config-interface";
import { IJwtPayload } from "../models/jwt-payload-interface";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh'
) {
  constructor(
    @Inject('AUTH_MODULE_CONFIG') readonly moduleConfig: IAuthModuleConfig
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // Extract JWT token from Authentication Header
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      // Use the secret key for JWT Refresh signing
      secretOrKey: moduleConfig.jwtRefreshSecret,
    });
  }

  async validate(payload: IJwtPayload) {
    return payload;
  }
}