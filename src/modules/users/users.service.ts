import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/pirsma/database.service';
import { CreateUserInput, UpdateUserInput } from './Dto/user.dto';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) { }

    async getUser(id: number) {
     let one = await this.prismaService.user.findFirst({where: {id: id}, include: {posts: true}})
    }

    async getUserAll() {
     let all = await this.prismaService.user.findMany({include: {posts: true}})

    }

    async post_user(payload: CreateUserInput) {
        return await this.prismaService.user.create({
            data: payload,
        });
    }

    async delete_user(id: number) {
        return await this.prismaService.user.delete({
            where: { id },
        });
    }

    async update_user(id: number, payload: UpdateUserInput) {
        let updatedUser = await this.prismaService.user.update({
            where: { id: id },
            data: payload,
        });
        return updatedUser;
    }


}
