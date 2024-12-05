import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto, ReturnUserDto, UpdateUserDto } from './dto/user.dto';
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

    async getAllUsers(
        page: number,
        limit: number,
        sort: string,
        order: 'ASC' | 'DESC',
    ): Promise<ReturnUserDto[]> {
        try {
            const offset = (page - 1) * limit;

            // orm query fiha il filtre w offset w limit w order
            const [users, total] = await this.userRepository.findAndCount({
                order: { [sort]: order },
                skip: offset,
                take: limit,
            });
            return users.map(user => this.toReturnUserDto(user));
        } catch (error) {

            throw new InternalServerErrorException('error while getting users');
        }
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<ReturnUserDto> {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException(`${id}: user not found`);
            }
            // ken fama password fil update yelzim naamloulou hash + we store it
            if (updateUserDto.password) {
                const salt = await bcrypt.genSalt();
                updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
            }
            const updatedUser = await this.userRepository.save({
                ...user,
                ...updateUserDto,
            });
            return this.toReturnUserDto(updatedUser);
        } catch (error) {
            throw new InternalServerErrorException('failed to update user');
        }
    }
    async deleteUser(id: number): Promise<void> {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException(`${id}: user not found`);
            }
            await this.userRepository.remove(user);
        } catch (error) {
            throw new InternalServerErrorException('error while deleting user');
        }
    }
    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { email } });
    }
}