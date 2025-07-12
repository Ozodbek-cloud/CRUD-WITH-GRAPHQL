import { Module } from '@nestjs/common';
import { ConfigModule } from './core/config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { join } from 'path';
import { PrismaModule } from './core/pirsma/database.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    graphiql: true,
    playground: true,
    autoSchemaFile: join(process.cwd(), "src/schema.gql")
  }),PrismaModule, ConfigModule, UsersModule, PostsModule],
})
export class AppModule {}
