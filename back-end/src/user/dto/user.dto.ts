import { IsString, IsEmail, IsEnum, Matches, isNumber, IsNumber, IsOptional } from 'class-validator';
import { UserRole, UserStatus } from '../../enum/userType';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;


  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;


  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsEmail()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'Email must be a valid email address',
  })
  email: string;

  @ApiProperty()
  @IsString()
  password: string;


  @ApiProperty({ enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;
}
//en principe na3lou base classe baadha naamlou menha il heritage
export class ReturnUserDto {
  @ApiProperty()
  @IsNumber()
  id: number;


  @ApiProperty()
  @IsString()
  firstName: string;


  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;


  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsEmail()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'Email must be a valid email address',
  })
  email: string;



  @ApiProperty({ enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({ enum: UserStatus })
  @IsEnum(UserStatus)
  status: UserStatus;

}
export class UpdateUserDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: 'Email must be a valid email address',
  })
  email?: string;

  @ApiProperty({ required: false, enum: UserRole })
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @ApiProperty()
  @IsString()
  @IsOptional()
  password?: string;
}
