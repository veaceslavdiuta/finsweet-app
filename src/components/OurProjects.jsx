import { Link } from 'react-router-dom';

function OurProjects() {
  return (
    <section className="w-full px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-y-16">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <h3 className="text-center font-poppins text-4xl font-semibold leading-tight sm:text-5xl">
            View our projects
          </h3>
          <Link
            to="/portfolio"
            className="group flex items-center gap-x-4 font-poppins text-base font-medium leading-7 hover:text-hover-black"
          >
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                className="stroke-[#282938] group-hover:stroke-hover-black"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap">
          <div className="group relative overflow-hidden">
            <img
              className="object-cover"
              src="/assets/Card1.png"
              alt="CardImage"
            />
            <div className="absolute inset-0 flex translate-x-[-100%] flex-col items-center justify-center gap-1 bg-gradient-to-r from-[#1C1E53] to-[rgba(28,30,83,0.42)] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 lg:gap-4">
              <h5 className="text-center font-poppins text-xl font-semibold leading-9 text-white lg:text-2xl">
                Workhub office Webflow Webflow Design
              </h5>
              <p className="hidden text-center font-poppins text-sm font-normal leading-7 text-white opacity-80 sm:block lg:text-base">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <Link
                to="/portfolio"
                className="flex items-center gap-4 font-poppins text-sm font-medium leading-7 text-yelow lg:text-base"
              >
                View project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                >
                  <path
                    d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                    fill="#FCD980"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-4 sm:w-auto sm:flex-row md:flex-col">
            <div className="group relative overflow-hidden">
              <img
                className="w-full object-cover"
                src="/assets/Card3.png"
                alt="CardImage"
              />
              <div className="absolute inset-0 flex translate-x-[-100%] flex-col items-center justify-center bg-gradient-to-r from-[#1C1E53] to-[rgba(28,30,83,0.42)] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <h5 className="text-center font-poppins text-xl font-semibold leading-9 text-white lg:text-2xl">
                  Unisaas Website Design
                </h5>
                <Link
                  to="/portfolio"
                  className="flex items-center gap-4 font-poppins text-sm font-medium leading-7 text-yelow lg:text-base"
                >
                  View portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="12"
                    viewBox="0 0 25 12"
                    fill="none"
                  >
                    <path
                      d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                      fill="#FCD980"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                className="w-full object-cover"
                src="/assets/Card2.png"
                alt="CardImage"
              />
              <div className="absolute inset-0 flex translate-x-[-100%] flex-col items-center justify-center bg-gradient-to-r from-[#1C1E53] to-[rgba(28,30,83,0.42)] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                <h5 className="text-center font-poppins text-xl font-semibold leading-9 text-white lg:text-2xl">
                  Unisaas Website Design
                </h5>
                <Link
                  to="/portfolio"
                  className="flex items-center gap-4 font-poppins text-sm font-medium leading-7 text-yelow lg:text-base"
                >
                  View portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="12"
                    viewBox="0 0 25 12"
                    fill="none"
                  >
                    <path
                      d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                      fill="#FCD980"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
