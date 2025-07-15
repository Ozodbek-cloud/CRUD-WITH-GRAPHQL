import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/user.model';
import { CreateUserInput } from '../users/Dto/user.dto';
import { PrismaService } from 'src/core/pirsma/database.service';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation(() => User)
    CreateUser(@Args('payload') payload: CreateUserInput) {
        return this.authService.auth(payload);
    }
}
