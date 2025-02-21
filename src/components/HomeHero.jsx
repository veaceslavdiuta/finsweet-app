import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="w-full bg-tint-blue px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-8 lg:flex-nowrap lg:gap-16">
        <div className="flex flex-col items-center gap-4 lg:w-1/2 lg:items-start lg:gap-8">
          <h1 className="non-italic text-center font-poppins text-4xl font-semibold leading-snug text-white sm:text-5xl lg:text-start lg:text-6xl">
            Building stellar websites for early startups
          </h1>
          <p className="non-italic text-center font-poppins text-sm font-normal text-white opacity-70 sm:text-base lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-custom-41 bg-yelow px-9 py-2 font-poppins text-base font-medium leading-8 hover:bg-hover-yelow sm:px-14 sm:py-4 sm:font-semibold"
            >
              View our work
            </Link>
            <Link
              to="/pricing"
              className="group flex items-center justify-center gap-4 font-poppins text-base font-medium leading-7 text-white hover:text-greyblue"
            >
              View Pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  className="stroke-[#F4F6FC] group-hover:stroke-greyblue"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="/assets/Illustration.png" alt="HeroImage" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
