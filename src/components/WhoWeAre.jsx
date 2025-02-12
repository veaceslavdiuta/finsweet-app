function WhoWeAre() {
  return (
    <section className="flex w-full justify-center">
      <div className="bg-greydark flex w-full max-w-screen-xl flex-col justify-center">
        <div className="bg-greydark flex flex-col gap-4 px-20 py-20">
          <h4 className="font-poppins text-base font-medium leading-7 text-dark-blue">
            Who we are
          </h4>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
                Goal focussed
              </h2>
              <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
                Continuous improvement
              </h2>
              <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
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
