import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.model';
import { CreatePostInput, UpdatePostInput } from './dto/post.dto';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  createPost(@Args('data') data: CreatePostInput) {
    return this.postsService.create(data);
  }

  @Query(() => [Post])
  findAllPosts() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  findPost(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePostInput,
  ) {
    return this.postsService.update(id, data);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.remove(id);
  }

}
