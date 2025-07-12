import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  body: string;

  @Field(type => Int)
  userid: number;
}
