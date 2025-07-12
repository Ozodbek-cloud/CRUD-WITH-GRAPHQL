import { Field, InputType, PartialType} from "@nestjs/graphql";
 


@InputType()
export class CreateUserInput {
    @Field()
    name: string;

    @Field()
    email: string;

}

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput){
    @Field()
    name: string;

    @Field()
    email: string;

}

