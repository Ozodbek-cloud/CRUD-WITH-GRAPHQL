import { Field, InputType, PartialType } from "@nestjs/graphql";

@InputType()
export class CreatePostInput {
    @Field()
    title: string;

    @Field()
    body: string;

    @Field()
    userid: number;
}

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {

    @Field()
    title: string;

    @Field()
    body: string;

}

