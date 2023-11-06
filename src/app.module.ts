import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from "@nestjs/passport";
import { ConfigModule ,ConfigService } from '@nestjs/config';
import {AuthService} from "./modules/auth/auth.service";
import {JwtAuthGuard} from "./modules/auth/guards/jwt-auth.guard";
import {JwtService} from "@nestjs/jwt";
import {JwtStrategy} from "./modules/auth/strategies/jwt.strategy";
import { LocalAuthGuard } from "./modules/auth/guards/local-auth.guards copy";


@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath:['.env'],
    }),
      MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: process.env.MONGO_URI,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    PassportModule
  ],
  controllers: [AppController],
  providers: [ AppService, JwtService, AuthService, JwtStrategy, LocalAuthGuard, JwtAuthGuard ],
})
export class AppModule {}
