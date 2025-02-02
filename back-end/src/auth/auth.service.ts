import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.userService.findByEmail(email);
      console.log(user)
      if (user && await bcrypt.compare(password, user.password)) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      throw new InternalServerErrorException('error in validating user');
    }
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    try {
      const payload: JwtPayload = { email: user.email, sub: user.id, role: user.role };
      return {
        token: this.jwtService.sign(payload),
        role: user.role
      };
    } catch (error) {
      throw new InternalServerErrorException('failed to login');
    }
  }
}