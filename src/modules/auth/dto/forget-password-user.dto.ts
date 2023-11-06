import { ApiProperty } from '@nestjs/swagger';

export  class ForgotPasswordDto
{
  @ApiProperty()
  email: string;

  @ApiProperty()
  newPassword: string;

  @ApiProperty()
  confirmPassword: string;
}