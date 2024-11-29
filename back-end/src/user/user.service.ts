import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<import("./user.entity").User[]> {
        throw new Error('Method not implemented.');
    }
}
