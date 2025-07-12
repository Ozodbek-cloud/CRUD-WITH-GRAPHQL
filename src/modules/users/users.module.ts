import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/core/pirsma/database.module';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UserResolver]
})
export class UsersModule {}
