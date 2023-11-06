import { ApiProperty } from '@nestjs/swagger';
import { isString } from 'util';
export    class LoginUserDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;
}
