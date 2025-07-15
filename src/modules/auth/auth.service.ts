import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/pirsma/database.service';
import { CreateUserInput } from '../users/Dto/user.dto';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { JwtAccessToken, JWtRefreshToken } from 'src/common/utils/jwt.utils';
interface JwtPayload {
    id: number,
    role: string
}
@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService) { }


    private async generateToken(payload: JwtPayload, accessTokenOnly = false) {
        const accessToken = await this.jwtService.signAsync(payload, JwtAccessToken);
        if (accessTokenOnly) {
            return { accessToken };
        }

        const refreshToken = await this.jwtService.signAsync(
            { id: payload.id },
            JWtRefreshToken
        );

        return { accessToken, refreshToken };
    }



    async auth(payload: CreateUserInput) {
        let hashed = await bcrypt.hash(payload.password, 10)

        let full = await this.prismaService.user.create({
            data: { ...payload, password: hashed },
        });
        return full
        
    }
}
