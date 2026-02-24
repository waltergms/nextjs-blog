import { IPostRepository } from './IPost';
import { PostRepository } from './Post';

export const postRepository: IPostRepository = new PostRepository();
