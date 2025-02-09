function Testimonials() {
  return (
    <section className="flex w-full justify-center bg-grey bg-opacity-50 py-32">
      <div className="flex w-full max-w-screen-xl justify-between gap-28">
        <div className="flex w-[30%] flex-col gap-4">
          <h4 className="text-4xll font-poppins font-semibold leading-normal text-dark-blue">
            What our clients say about us.
          </h4>
          <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="flex w-[70%] flex-col gap-12">
          <h5 className="font-poppins text-3xll font-medium leading-normal text-dark-blue">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h5>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="rounded-full"
                src="/assets/userProfile.png"
                alt="userProfile"
              />
              <div className="flex flex-col">
                <h6 className="font-poppins text-lg font-normal leading-8 text-dark-blue">
                  Jenny Wilson
                </h6>
                <p className="font-poppins text-xs font-normal leading-7 text-dark-blue">
                  Vice President
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="border-gray-300 text-gray-700 flex h-11 w-12 items-center justify-center rounded-full border-none text-2xl transition hover:bg-[#5239FA] hover:text-white">
                &lt;
              </button>

              <button className="border-gray-300 text-gray-700 flex h-11 w-12 items-center justify-center rounded-full border-none text-2xl transition hover:bg-[#5239FA] hover:text-white">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
