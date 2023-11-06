import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import {PassportModule} from "@nestjs/passport";
import{jwtConstants} from './constants/constants'
import {LocalAuthGuard} from "../auth/guards/local-auth.guards copy";
import {JwtStrategy} from "./strategies/jwt.strategy";
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersRepository } from "../users/users.repository";




@Module({
  imports: [
    UsersModule,
    PassportModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions: { expiresIn: '3600s' }
    })
],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard,JwtStrategy ,LocalAuthGuard,UsersService, UsersRepository]
})
export class AuthModule {}
