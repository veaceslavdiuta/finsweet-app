import LogoSection from './LogoSection';

function OurBenefits({ isFeaturePage = false }) {
  const benefits = [
    {
      id: 1,
      benefitTitle: 'Customize with ease',
      benefitDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
      benefitIcon: 'Icon6.png',
    },
    {
      id: 2,
      benefitTitle: ' Perfectly Responsive',
      benefitDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
      benefitIcon: 'Icon3.png',
    },
    {
      id: 3,
      benefitTitle: '    Friendly Support',
      benefitDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
      benefitIcon: 'Icon1.png',
    },
  ];

  return (
    <section className="w-full px-8 py-20 lg:py-32">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-12">
        {isFeaturePage && <LogoSection />}
        <h2 className="text-center font-poppins text-4xl font-semibold leading-snug text-dark-blue md:w-1/2 md:text-5xl">
          The benefits of working with us
        </h2>
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          {benefits.map(
            ({ id, benefitTitle, benefitDescription, benefitIcon }) => (
              <div
                key={id}
                className="flex flex-col items-start gap-3 bg-grey p-6 sm:gap-7 sm:p-12"
              >
                <img src={`/assets/${benefitIcon}`} alt="Icon" />
                <h4 className="font-poppins text-xl font-normal leading-9 text-dark-blue sm:text-2xl">
                  {benefitTitle}
                </h4>
                <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
                  {benefitDescription}
                </p>
              </div>
            )
          )}
        </div>

        {!isFeaturePage && <LogoSection />}
      </div>
    </section>
  );
}

export default OurBenefits;
