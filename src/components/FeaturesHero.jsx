import { Link } from 'react-router-dom';

function FeaturesHero() {
  return (
    <section className="w-full bg-tint-blue px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-8 lg:flex-nowrap lg:gap-16">
        <div className="flex flex-col items-center gap-8 lg:w-1/2 lg:items-start">
          <h1 className="text-center font-poppins text-4xl font-semibold leading-snug text-white sm:text-5xl lg:w-[80%] lg:text-start lg:text-6xl">
            All the features you need
          </h1>
          <p className="text-center font-poppins text-sm font-medium leading-7 text-white opacity-70 sm:text-base lg:w-[85%] lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            className="rounded-custom-41 bg-yelow px-6 py-2 font-poppins text-base font-semibold leading-8 text-dark-blue hover:bg-hover-yelow sm:px-12 sm:py-4 sm:text-lg"
            to="/pricing"
          >
            View Pricing
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img src="/assets/featuresHero.png" alt="featuresHero" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
