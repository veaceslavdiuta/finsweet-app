import { getRecentPosts } from '../services/posts.services';
import BlogCard from './BlogCard';

function OurBlog() {
  const recentPosts = getRecentPosts();

  return (
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl flex-col gap-16">
        <h3 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          Our blog
        </h3>
        <div className="grid grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
