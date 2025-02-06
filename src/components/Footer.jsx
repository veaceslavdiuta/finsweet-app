function Footer() {
  return (
    <footer className="flex w-full justify-center bg-tint-blue">
      <div className="flex w-full max-w-screen-xl justify-between gap-36 pt-24">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col gap-6">
            <img src="./assets/LogoFooter.png" width={160} alt="Logo" />
            <p className="non-italic font-poppins text-base font-medium text-white">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div className="flex gap-7 bg-yelow px-9 py-4">
            <div>
              <h4 className="non-italic font-poppins text-lg font-medium text-dark-blue">
                Email me at
              </h4>
              <p className="non-italic font-poppins text-base font-normal text-dark-blue opacity-80">
                contact@website.com
              </p>
            </div>
            <div>
              <h4 className="non-italic font-poppins text-lg font-medium text-dark-blue">
                Call us
              </h4>
              <p className="non-italic font-poppins text-base font-normal text-dark-blue opacity-80">
                0927 6277 28525
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="non-italic font-poppins text-5xl font-semibold text-white">
            Lets Talk!
          </h2>
          <p className="non-italic font-poppins text-base font-medium text-white">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="flex gap-7">
            <img src="./assets/Facebook.png" alt=".FacebookLogo" />
            <img src="./assets/Twitter.png" alt="TwitterLogo" />
            <img src="./assets/Instagram.png" alt="InstagramLogo" />
            <img src="./assets/LinkedIn.png" alt="LinkedInLogo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
