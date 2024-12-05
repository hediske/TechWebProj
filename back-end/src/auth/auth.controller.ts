import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from './dto/auth.dto';

@ApiTags('auth') // Swagger tag for the controller
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 201, description: 'login done' })
  @ApiResponse({ status: 401, description: 'error login' })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}