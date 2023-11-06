import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignupUserDto } from './dto/signup-user.dto';
import {LoginUserDto} from "./dto/login-user.dto"
import {ForgotPasswordDto} from "./dto/forget-password-user.dto"
import { ApiBearerAuth, ApiBody } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import {deleteDataDto} from "./dto/delete-user.dto"
import { JwtAuthGuard } from "./guards/jwt-auth.guard";



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  // sign up
  @Post('/signup')
  async signup(@Body() signUpUserDto: SignupUserDto) {
    return this.authService.signup(signUpUserDto);
  }

  //login
  @ApiBody({ type: LoginUserDto })
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

    //forgetPassword
    @Put('/forgotPassword')
    async forgotPassword(
      @Body() reqBody: ForgotPasswordDto): Promise<any> {
      return this.authService.forgotPassword(reqBody);
    }


     //deleteUser
  @Delete('/deleteUser')
  async deleteUser(
    @Body() reqBody: deleteDataDto): Promise<any> {
    return this.authService.deleteUser(reqBody);
  }
  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
