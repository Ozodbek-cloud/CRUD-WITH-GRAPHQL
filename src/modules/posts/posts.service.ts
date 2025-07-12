import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/pirsma/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

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
    return this.prismaService.post.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async update(id: number, data: any) {
    return this.prismaService.post.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prismaService.post.delete({
      where: { id },
    });
  }
}
