function OurMission() {
  return (
    <section className="w-full bg-accent px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-12 md:gap-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-36">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h4 className="font-poppins text-base font-medium leading-7 text-dark-blue">
              Our Mission
            </h4>
            <h3 className="font-poppins text-4xl font-semibold leading-normal text-dark-blue">
              Inspire, Innovate, Share
            </h3>
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src="/assets/ourMissionImage1.png" alt="Our Mission" />
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-36">
          <img
            className="order-2 lg:order-1"
            src="/assets/ourMissionImage2.png"
            alt="Our Mission"
          />
          <div className="order-1 flex flex-col gap-2 sm:gap-4 lg:order-2">
            <h4 className="font-poppins text-base font-medium leading-7 text-dark-blue">
              Our Vision
            </h4>
            <h3 className="font-poppins text-4xl font-semibold leading-normal text-dark-blue">
              Laser focus
            </h3>
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
