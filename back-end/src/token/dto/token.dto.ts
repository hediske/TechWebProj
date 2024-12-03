import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { TokenStatus } from '../../enum/tokenStatus';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    token: string;

    @ApiProperty({ enum: TokenStatus })
    @IsEnum(TokenStatus)
    status: TokenStatus;

    @ApiProperty()
    @IsNotEmpty()
    userId: number;
}