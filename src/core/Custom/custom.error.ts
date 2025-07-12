import { GraphQLError } from 'graphql';

export class PostNotFoundError extends GraphQLError {
  constructor(postId: number) {
    super(`Post with ID ${postId} not found`, {
      extensions: {
        code: 'POST_NOT_FOUND',
        postId,
      },
    });
  }
}