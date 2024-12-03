import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ReturnUserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('users') // sawgger tag
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get()
  @ApiOperation({ summary: 'all users' })
  @ApiResponse({ status: 200, description: 'success', type: [ReturnUserDto] })
  async getAllUsers(): Promise<ReturnUserDto[]> {
    return this.userService.getAllUsers();
  }


  @Get(':id')
  @ApiOperation({ summary: 'user by id' })
  @ApiResponse({ status: 200, description: 'success', type: User })
  async getUserById(@Param('id') id: number): Promise<ReturnUserDto> {
    return this.userService.getUserById(id);
  }

  @Post()
  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 201, description: 'success', type: ReturnUserDto })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    return this.userService.createUser(createUserDto);
  }
}
