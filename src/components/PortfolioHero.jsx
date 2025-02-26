function PortfolioHero() {
  return (
    <section className="w-full bg-grey px-8 py-20 lg:py-24 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center">
        <h4 className="text-center font-poppins text-sm font-medium leading-7 text-dark-blue opacity-70 sm:text-base">
          What we created
        </h4>
        <h1 className="ont-poppins text-center text-4xl font-semibold leading-snug text-dark-blue sm:text-5xl">
          Our Work Portfolio
        </h1>
        <p className="pb-8 pt-6 text-center font-poppins text-sm font-medium leading-7 text-dark-blue opacity-70 sm:text-base md:w-[58%]">
          We help teams create great digital products by providing them with
          tools and technology to make the design-to-code process universally
          accessible.
        </p>
        <div className="flex gap-8">
          <img
            className="cursor-pointer"
            src="/assets/FacebookNeg.png"
            alt="FacebookIcon"
          />
          <img
            className="cursor-pointer"
            src="/assets/TwitterNeg.png"
            alt="TwitterIcon"
          />
          <img
            className="cursor-pointer"
            src="/assets/InstagramNeg.png"
            alt="InstagramIcon"
          />
          <img
            className="cursor-pointer"
            src="/assets/LinkedInNeg.png"
            alt="LinkedInIcon"
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;
