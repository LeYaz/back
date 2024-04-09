import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { GroupModule } from './group/group.module';
// import { CardModule } from './card/card.module';
// import { TryModule } from './try/try.module';
import { ConfigModule } from '@nestjs/config';
import { ListeModule } from './liste/liste.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT), 
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule.forRoot({
      jwtSecret: process.env.JWT_SECRET,
      jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    }),
    ProfileModule,
    GroupModule,
    ListeModule,
    // CardModule,
    // TryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
