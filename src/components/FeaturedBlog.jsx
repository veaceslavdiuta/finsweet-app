import { Link } from 'react-router-dom';

function FeaturedBlog() {
  return (
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-6">
        <h1 className="w-[75%] text-center font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <h5 className="flex gap-4 font-poppins text-base font-medium leading-7 text-dark-blue">
          <span className="opacity-85">Andrew Jhonson</span>
          Posted on 27th January 2023
        </h5>
        <img src="/assets/imageFeaturedBlog.png" alt="FeaturedBlog" />
        <p className="w-[65%] text-center font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <Link
          className="font-poppins text-base font-normal leading-7 text-royal-blue opacity-70 hover:text-dark-blue"
          to="/"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}

export default FeaturedBlog;
