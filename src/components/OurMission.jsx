function OurMission() {
  return (
    <section className="flex w-full justify-center bg-accent py-32">
      <div className="flex w-full max-w-screen-xl flex-col gap-24">
        <div className="flex gap-36">
          <div className="flex flex-col gap-4">
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
        <div className="flex gap-36">
          <img src="/assets/ourMissionImage2.png" alt="Our Mission" />
          <div className="flex flex-col gap-4">
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
