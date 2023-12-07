import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { GroupModule } from './group/group.module';
import { CardModule } from './card/card.module';
import { TryModule } from './try/try.module';

@Module({
  imports: [
    //TODO FIX THIS
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, 
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProfileModule,
    GroupModule,
    CardModule,
    TryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
