import BlogPosts from '../components/BlogPosts';
import FeaturedBlog from '../components/FeaturedBlog';
import { getPosts } from '../services/posts.services';

function Blog() {
  const posts = getPosts();

  return (
    <main className="flex flex-col">
      <FeaturedBlog posts={posts} />
      <BlogPosts posts={posts} />
    </main>
  );
}

export default Blog;
