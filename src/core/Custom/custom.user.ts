import { GraphQLError } from 'graphql';

export class UserNotFoundError extends GraphQLError {
  constructor(userId: number) {
    super(`Post with ID ${userId} not found`, {
      extensions: {
        code: 'POST_NOT_FOUND',
        userId,
      },
    });
  }
}