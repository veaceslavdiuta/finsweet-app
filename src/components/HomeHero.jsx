import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="flex w-full justify-center bg-tint-blue py-32">
      <div className="flex w-full max-w-screen-xl items-center justify-between gap-x-16">
        <div className="flex w-1/2 flex-col gap-y-8">
          <h1 className="non-italic font-poppins text-6xl font-semibold leading-snug text-white">
            Building stellar websites for early startups
          </h1>
          <p className="non-italic font-poppins text-base font-normal text-white opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex gap-x-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-custom-41 bg-yelow px-14 py-4 font-poppins text-base font-semibold leading-8 hover:bg-hover-yelow"
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
        <div className="w-1/2">
          <img src="/assets/Illustration.png" alt="HeroImage" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
