import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

export async function generateMetadata(){
  const posts = await getPosts();
  return {
    title: `Browse our ${posts.length} posts`,
    description: 'Bowse all our posts'
  }
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
