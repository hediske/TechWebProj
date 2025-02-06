import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../enum/userType';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);