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
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
        {isFeaturePage && <LogoSection />}
        <h2 className="w-1/2 text-center font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          The benefits of woring with us
        </h2>
        <div className="flex justify-between gap-8">
          {benefits.map(
            ({ id, benefitTitle, benefitDescription, benefitIcon }) => (
              <div
                key={id}
                className="flex flex-col items-start gap-7 bg-grey p-12"
              >
                <img src={`/assets/${benefitIcon}`} alt="Icon" />
                <h6 className="font-poppins text-2xl font-medium leading-7 text-dark-blue">
                  {benefitTitle}
                </h6>
                <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
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
