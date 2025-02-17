import BlogCard from './BlogCard';
import { getPosts } from '../services/posts.services';

function BlogPosts() {
  const posts = getPosts();

  return (
    <section className="flex w-full justify-center pb-32">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
        <h2 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          Our Blog
        </h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-16">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
