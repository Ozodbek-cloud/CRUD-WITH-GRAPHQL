import { Args, Int, Mutation, Query, ResolveField, Resolver, } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./user.model";
import { CreateUserInput, UpdateUserInput } from "./Dto/user.dto";

@Resolver(() => User)
export class UserResolver {
    constructor(private userService: UsersService) { }

    @Query(() => User)
    getUser(@Args('id') id : number) {
        return this.userService.getUser(id)
    }

    @Query(() => [User])
    getUserAll() {
        return this.userService.getUserAll()
    }

    @Mutation(() => User)
    CreateUser(@Args('payload') payload: CreateUserInput) {
        return this.userService.post_user(payload);
    }

    @Mutation(() => User)
    DeleteUser(@Args('id') id: number) {
        return this.userService.delete_user(id)
    }

    @Mutation(() => User)
    async updateUser(
        @Args('id', { type: () => Int }) id: number,
        @Args('payload') payload: UpdateUserInput,
    ) {
        return this.userService.update_user(id, payload);
    }



}