function Footer() {
  return (
    <div className="w-full flex justify-center bg-tint-blue">
      <div className="max-w-screen-xl w-full flex justify-between pt-24 gap-36">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col gap-6">
            <img src="./assets/LogoFooter.png" width={160} alt="Logo" />
            <p className="font-poppins text-base non-italic font-medium text-white">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div className="flex gap-7 bg-yelow px-9 py-4">
            <div>
              <h4 className="font-poppins text-lg non-italic font-medium text-dark-blue">
                Email me at
              </h4>
              <p className="font-poppins text-base non-italic font-normal opacity-80 text-dark-blue">
                contact@website.com
              </p>
            </div>
            <div>
              <h4 className="font-poppins text-lg non-italic font-medium text-dark-blue">
                Call us
              </h4>
              <p className="font-poppins text-base non-italic font-normal opacity-80 text-dark-blue">
                0927 6277 28525
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-poppins text-5xl non-italic font-semibold text-white">
            Lets Talk!
          </h2>
          <p className="font-poppins text-base non-italic font-medium text-white">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="flex gap-7">
            <img src="./assets/Facebook.png" alt=".Facebook" />
            <img src="./assets/Twitter.png" alt="Twitter" />
            <img src="./assets/Instagram.png" alt="Instagram" />
            <img src="./assets/LinkedIn.png" alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
