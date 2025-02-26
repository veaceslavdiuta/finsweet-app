import BlogCard from './BlogCard';

function BlogPosts(props) {
  return (
    <section className="w-full px-8 pb-20 lg:pb-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-12">
        <h2 className="font-poppins text-3xl font-semibold leading-snug text-dark-blue sm:text-4xl md:text-5xl">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {props.posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
