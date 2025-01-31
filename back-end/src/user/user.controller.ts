import { Controller, Get, Post, Body, Param, Put, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ReturnUserDto, UpdateUserDto } from './dto/user.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { UserRole } from 'src/enum/userType';
import { Roles } from 'src/auth/roles.decorator';


@ApiTags('users') // sawgger tag
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'All users retrieved', type: [ReturnUserDto] })
  //aamlthum haka bech ykounou optional
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page' })
  @ApiQuery({ name: 'sort', required: false, type: String, description: 'Field to sort by' })
  @ApiQuery({ name: 'order', required: false, enum: ['ASC', 'DESC'], description: 'Sort order' })
  async getAllUsers(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sort') sort: string = 'id',
    @Query('order') order: 'ASC' | 'DESC' = 'ASC',
  ): Promise<ReturnUserDto[]> {
    return this.userService.getAllUsers(page, limit, sort, order);
  }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get(':id')
  @ApiOperation({ summary: 'user by id' })
  @ApiResponse({ status: 200, description: 'success', type: User })
  async getUserById(@Param('id') id: number, @Req() req): Promise<ReturnUserDto> {
    return this.userService.getUserById(id);
  }


  @Post()
  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 201, description: 'success', type: ReturnUserDto })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    return this.userService.createUser(createUserDto);
  }
  //put 5ater changement mouch keml yaani some fields ...
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, description: 'User updated successfully', type: ReturnUserDto })
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<ReturnUserDto> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
