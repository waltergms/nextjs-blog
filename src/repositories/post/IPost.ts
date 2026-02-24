import { PostModel } from '@/models/Post/post-models';

export interface IPostRepository {
  findAllPublished(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | null>;
  findBySlug(slug: string): Promise<PostModel | null>;
}
