import { Link } from 'react-router-dom';

function FeaturedBlog() {
  return (
    <section className="w-full px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-2 sm:gap-6">
        <h1 className="text-center font-poppins text-3xl font-semibold leading-snug text-dark-blue sm:w-[75%] sm:text-4xl md:text-5xl">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <h5 className="flex gap-4 text-center font-poppins text-sm font-medium leading-7 text-dark-blue sm:text-base">
          <span className="opacity-85">Andrew Jhonson</span>
          Posted on 27th January 2023
        </h5>
        <img src="/assets/imageFeaturedBlog.png" alt="FeaturedBlog" />
        <p className="text-center font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:w-[65%] sm:text-base">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <Link
          className="font-poppins text-sm font-normal leading-7 text-royal-blue opacity-70 hover:text-dark-blue sm:text-base"
          to="/blog"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}

export default FeaturedBlog;
