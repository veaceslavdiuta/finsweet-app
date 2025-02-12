import { Link } from 'react-router-dom';

function InquiryForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userURL = e.target.url.value;

    console.log({ userName, userEmail, userURL });
  }

  return (
    <section className="flex w-full justify-center">
      <div className="flex w-full max-w-screen-xl items-start bg-tint-blue">
        <div className="bg-gray-200 flex w-1/2 flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat px-24 py-24">
          <h3 className="font-poppins text-6xl font-semibold leading-snug text-white">
            Building stellar websites for early startups
          </h3>
          <p className="font-poppins text-base font-medium leading-7 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-1/2 flex-col justify-between gap-4 px-24 py-24"
        >
          <h5 className="font-poppins text-3xll font-normal leading-normal text-white">
            Send inquiry
          </h5>
          <p className="pb-6 font-poppins text-base font-medium leading-7 text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <input
            className="w-full rounded-lg border border-[rgba(255,255,255,0.20)] bg-tint-blue p-4 font-poppins text-base font-normal leading-7 text-grey opacity-50 outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
          />

          <input
            className="w-full rounded-lg border border-[rgba(255,255,255,0.20)] bg-tint-blue p-4 font-poppins text-base font-normal leading-7 text-grey opacity-50 outline-none"
            type="email"
            name="email"
            placeholder="Email"
          />

          <input
            className="w-full rounded-lg border border-[rgba(255,255,255,0.20)] bg-tint-blue p-4 font-poppins text-base font-normal leading-7 text-grey opacity-50 outline-none"
            type="url"
            name="url"
            placeholder="Paste your Figma design URL"
          />

          <div className="flex flex-col justify-center gap-7 pt-10">
            <button className="rounded-custom-41 border-none bg-yelow px-[51] py-[15px] font-poppins text-lg font-medium leading-8 hover:bg-hover-yelow">
              Send an Inquiry
            </button>
            <Link
              to="/contact-us"
              className="group flex items-center justify-center gap-4 font-poppins text-lg font-medium leading-8 text-white hover:text-greyblue"
            >
              Get in touch with us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  className="stroke-[#F4F6FC] group-hover:stroke-greyblue"
                />
              </svg>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default InquiryForm;
