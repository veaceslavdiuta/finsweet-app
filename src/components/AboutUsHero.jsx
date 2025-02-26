function AboutUsHero() {
  return (
    <section className="w-full px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20 xl:gap-[138px]">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h4 className="font-poppins text-base font-normal leading-8 text-dark-blue sm:text-lg">
            About us
          </h4>
          <h1 className="text-center font-poppins text-4xl font-semibold leading-snug text-dark-blue sm:text-6xl lg:text-start">
            Our designs solve problems
          </h1>
          <p className="text-center font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <img src="/assets/aboutUsHero.png" alt="aboutUsHero" />
      </div>
    </section>
  );
}

export default AboutUsHero;
