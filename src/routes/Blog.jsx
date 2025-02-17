import BlogPosts from '../components/BlogPosts';
import FeaturedBlog from '../components/FeaturedBlog';

function Blog() {
  return (
    <main className="flex flex-col">
      <FeaturedBlog />
      <BlogPosts />
    </main>
  );
}

export default Blog;
