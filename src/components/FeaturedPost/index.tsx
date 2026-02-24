import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export async function FeaturedPost() {
  const posts = await postRepository.findAllPublished();
  const featuredPost = posts[0];
  return (
    <>
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: `/posts/${featuredPost.slug}`,
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: featuredPost.coverImageUrl,
            alt: featuredPost.title,
            priority: true,
          }}
        />

        <PostSummary
          postHeading='h1'
          postLink={`/posts/${featuredPost.slug}`}
          createdAt={featuredPost.createdAt}
          title={featuredPost.title}
          excerpt={featuredPost.excerpt}
        />
      </section>
    </>
  );
}
