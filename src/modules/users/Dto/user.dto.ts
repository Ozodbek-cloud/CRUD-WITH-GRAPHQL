import { Field, InputType, ObjectType, PartialType} from "@nestjs/graphql";
import { UserRole } from "@prisma/client";
 


@InputType()
export class CreateUserInput {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string

    @Field()
    role: UserRole

}

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput){
    @Field()
    name: string;

    @Field()
    email: string;

}

