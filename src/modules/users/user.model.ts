import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password: string;

  @Field(()=> UserRole)
  role: UserRole;
}
