import { User } from "src/user/user.entity";

export interface JwtPayload {
    email: string;
    sub: number;
    role: User;
}