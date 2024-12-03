import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto, ReturnUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }
    private toReturnUserDto(user: User): ReturnUserDto {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            email: user.email,
            role: user.role,
            status: user.status,
        };
    }
    async createUser(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
            // user to database=user la9dim + new hashed pass
            const newUser = this.userRepository.create({
                ...createUserDto,
                password: hashedPassword,
            });
            const savedUser = await this.userRepository.save(newUser);
            //dto mte3 return bech na7iw il hashed pass for more security
            return this.toReturnUserDto(savedUser);
        } catch (error) {
            //zid error table fil db to add it + do we need a rollback ? 
            throw new InternalServerErrorException('Failed to create user');
        }
    }


    async getUserById(id: number): Promise<ReturnUserDto> {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`);
            }
            return this.toReturnUserDto(user);
        } catch (error) {
            throw new InternalServerErrorException('Failed to fetch user by ID');
        }
    }

    async getAllUsers(): Promise<ReturnUserDto[]> {
        try {
            const users = await this.userRepository.find();
            return users.map(user => this.toReturnUserDto(user));
        } catch (error) {
            throw new InternalServerErrorException('Failed to fetch all users');
        }
    }
}