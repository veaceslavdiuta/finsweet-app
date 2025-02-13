import { Link } from 'react-router-dom';

function FeaturesHero() {
  return (
    <section className="flex w-full justify-center bg-tint-blue py-32">
      <div className="flex w-full max-w-screen-xl gap-16">
        <div className="flex w-1/2 flex-col items-start gap-8">
          <h1 className="w-[80%] font-poppins text-6xl font-semibold leading-snug text-white">
            All the features you need
          </h1>
          <p className="w-[85%] font-poppins text-base font-medium leading-7 text-white opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            className="rounded-custom-41 bg-yelow px-12 py-4 font-poppins text-lg font-semibold leading-8 text-dark-blue hover:bg-hover-yelow"
            to="/pricing"
          >
            View Pricing
          </Link>
        </div>
        <div className="w-1/2">
          <img src="/assets/featuresHero.png" alt="featuresHero" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesHero;
