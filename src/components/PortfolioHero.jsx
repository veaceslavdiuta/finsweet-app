function PortfolioHero() {
  return (
    <section className="flex w-full justify-center bg-grey py-24">
      <div className="flex w-full max-w-screen-xl flex-col items-center">
        <h4 className="font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
          What we created
        </h4>
        <h1 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          Our Work Portfolio
        </h1>
        <p className="w-[58%] pb-8 pt-6 text-center font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
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
