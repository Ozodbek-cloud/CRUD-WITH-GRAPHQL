import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/pirsma/database.service';
import { Prisma } from '@prisma/client';
import { PostNotFoundError } from 'src/core/Custom/custom.error';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) { }

  async create(data: any) {
    return this.prismaService.post.create({
      data,
    });
  }

  async findAll() {
    return this.prismaService.post.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: number) {
    let one = await this.prismaService.post.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
    if (!one) {
      throw new PostNotFoundError(id)
    }
    return one
  }

  async update(id: number, data: any) {
    let updated = await this.prismaService.post.update({
      where: { id },
      data,
    });
    if (!id) {
      throw new PostNotFoundError(id)
    }
  }

  async remove(id: number) {
    let deleted = await this.prismaService.post.delete({
      where: { id },
    });
    if (!deleted) {
      throw new PostNotFoundError(id)
    }
    return deleted
  }
  
}
