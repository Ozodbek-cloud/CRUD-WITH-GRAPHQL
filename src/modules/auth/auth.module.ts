import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/core/pirsma/database.module';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [AuthService, AuthResolver]
})
export class AuthModule {}
