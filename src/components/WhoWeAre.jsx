function WhoWeAre() {
  return (
    <section className="w-full px-8 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col justify-center bg-greydark">
        <div className="flex flex-col gap-4 bg-greydark p-5 sm:p-20">
          <h4 className="font-poppins text-base font-medium leading-7 text-dark-blue">
            Who we are
          </h4>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-poppins text-3xl font-semibold leading-9 text-dark-blue sm:text-4xll sm:leading-normal">
                Goal focussed
              </h3>
              <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-poppins text-3xl font-semibold leading-9 text-dark-blue sm:text-4xll sm:leading-normal">
                Continuous improvement
              </h3>
              <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <img src="/assets/whoWeAreBg.png" alt="WhoWeAreImage" />
      </div>
    </section>
  );
}

export default WhoWeAre;
