import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { IJwtPayload } from '../models/jwt-payload-interface';
import { IAuthModuleConfig } from '../models/auth-module-config-interface';

@Injectable()
export class AuthService {
    // constructor(
    //     private usersService: UsersService,
    //     private jwtService: JwtService,
    //     ){}

    // async signIn(email: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findByEmail(email);
    //     const isMatch = await bcrypt.compare(pass, user.password);
    //     if(!isMatch){
    //         throw new UnauthorizedException();
    //     }
    //     const payload = { sub: user.id, email: user.email};
        
    //     return {
    //         access_token: await this.jwtService.signAsync(payload),
    //     };
    // }

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @Inject('AUTH_MODULE_CONFIG') private moduleConfig: IAuthModuleConfig,
        private jwtService: JwtService,
    ) {
        
    }

    // Validate credentials
  async validateCredentials(email: string, pass: string) {
    // Get user by email from database
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    // if a user with that email exists then check password
    // I'm using a libraby called `argon2` for hashing user passwords
    // and storing them in the database;

    if (user) {
      // Match the entity's password has with provided pass
      const passMatch = await bcrypt.compare(pass, user.password);
      if (passMatch) {
        return user;
      }
    }
    // Throw an exception if nothing is returned
    // from the previous steps
    throw new UnauthorizedException();
  }

  // Get a user by ID and generate the JWT tokens to send to the client
  // DO NOT use the method directly. Instead validate the user exists
  // first and their credentials are correct
  async login(id: number) {
    // Get the user entity from DB
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }
    
    // Prepare the JWT Payload
    // We will add only the user ID and whether the user is staff/manager.
    // You can also pass a list of permissions here to prevent extra database
    // queries to retrieve them.
    const payload = {
      id: user.id,
      email: user.email,
    };
    return {      
      access: await this.generateAccessToken(payload), // Access Token
      refresh: this._generateRefreshToken(payload), // Refresh Token
    };
  }
  
  // Create a user account. Pass a DTO model with validated data
  async createAccount(dto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const account = await this.userRepository.save({
      ...dto,
      // Hash the user's password before storing it to the db,
      password: await bcrypt.hash(dto.password, salt),
    });
  }

  // Generate Access Token
async generateAccessToken(payload: IJwtPayload) {
    return this.jwtService.sign(payload, {
        expiresIn: '5m', // Short expiration (5 minutes)
        secret: this.moduleConfig.jwtSecret, 
                        // Get the secret from the environment or 
                        // from an Injection Token
    });
}

  // Generate Refresh Token
  private _generateRefreshToken(payload: IJwtPayload) {
    return this.jwtService.sign(payload, {
      expiresIn: '30d', // Long expiration (30 days)
      secret: this.moduleConfig.jwtRefreshSecret,
              // Get the secret from the environment or 
              // from an Injection Token
    });
  }
}

