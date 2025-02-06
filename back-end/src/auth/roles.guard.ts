import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guards';
import { UserRole } from '../enum/userType';

@Injectable()
export class RolesGuard extends JwtAuthGuard implements CanActivate {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext): boolean {
        // ne5thu il role ali fil decorator @roles
        const roles = this.reflector.get<UserRole[]>('roles', context.getHandler());
        if (!roles) {
            return true; // if no role , true (bech nsahel il rou7i il debug)
        }

        // intercet the request bech ne5u user data
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        // check if the il user role mawjoud fil roles ali fil decorator
        const hasRole = roles.includes(user.role);
        if (!user || !user.role || !hasRole) {
            throw new ForbiddenException('no permission');
        }

        return true; //ken kol chat mrigl t3ada bil steps il kol he's allowed
    }
}