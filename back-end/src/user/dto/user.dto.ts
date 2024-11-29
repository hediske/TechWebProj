import { IsString, IsEmail, IsEnum, Matches } from 'class-validator';
import { UserRole, UserStatus } from '../../enum/userType';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsEmail()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'Email must be a valid email address',
  })
  email: string;

  @IsString()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsEnum(UserStatus)
  status: UserStatus;
}