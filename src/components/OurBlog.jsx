import { getRecentPosts } from '../services/posts.services';
import BlogCard from './BlogCard';

function OurBlog() {
  const recentPosts = getRecentPosts();

  return (
    <section className="w-full px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-8 md:gap-16 lg:items-start">
        <h3 className="font-poppins text-4xl font-semibold leading-snug text-dark-blue sm:text-5xl">
          Our blog
        </h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
