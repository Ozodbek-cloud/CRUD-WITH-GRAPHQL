import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/pirsma/database.service';
import { CreateUserInput, UpdateUserInput } from './Dto/user.dto';
import { UserNotFoundError } from 'src/core/Custom/custom.user';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) { }

    async getUser(id: number) {
     let one = await this.prismaService.user.findFirst({where: {id: id}, include: {posts: true}})
     if (!one) {
        throw new UserNotFoundError(id)
     }
    }

    async getUserAll() {
     let all = await this.prismaService.user.findMany({include: {posts: true}})
      return all
    }

    async post_user(payload: CreateUserInput) {
        let full = await this.prismaService.user.create({
            data: payload,
        });
        return full

    }

    async delete_user(id: number) {
        let deleted  = await this.prismaService.user.delete({
            where: { id },
        });

        if (!deleted) {
        throw new UserNotFoundError(id)
     }
    }

    async update_user(id: number, payload: UpdateUserInput) {
        let updatedUser = await this.prismaService.user.update({
            where: { id: id },
            data: payload,
        });
        
        if (!id) {
        throw new UserNotFoundError(id)
     }
        return updatedUser;
    }


}
