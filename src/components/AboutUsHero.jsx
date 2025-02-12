function AboutUsHero() {
  return (
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl justify-between gap-[138px]">
        <div className="flex flex-col gap-8">
          <h4 className="font-poppins text-lg font-normal leading-8 text-dark-blue">
            About us
          </h4>
          <h1 className="font-poppins text-6xl font-semibold leading-snug text-dark-blue">
            Our designs solve problems
          </h1>
          <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
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
