import { PostModel } from '@/models/Post/post-models';
import { IPostRepository } from './IPost';
import { resolve } from 'path';
import { promises as fs } from 'fs';

const ROOT_DIR = process.cwd();
const JSON_POSTS_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json');

const SIMULATE_WAIT_IN_MS = 1000;

export class PostRepository implements IPostRepository {
  private async simulateWait() {
    return await new Promise(resolve =>
      setTimeout(resolve, SIMULATE_WAIT_IN_MS),
    );
  }

  private async readFromDisk() {
    await this.simulateWait();
    const data = await fs.readFile(JSON_POSTS_PATH, 'utf-8');
    const parsedJSON = JSON.parse(data);
    const { posts } = parsedJSON;
    return posts;
  }

  async findAllPublished(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts.filter((post: PostModel) => post.published);
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.readFromDisk();
    return posts.find((post: PostModel) => post.id === id) || null;
  }

  async findBySlug(slug: string): Promise<PostModel | null> {
    const posts = await this.readFromDisk();
    return posts.find((post: PostModel) => post.slug === slug) || null;
  }
}
