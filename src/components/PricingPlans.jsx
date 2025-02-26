import PricingCard from './PricingCard';

function PricingPlans() {
  const plans = [
    {
      id: 1,
      price: '$299',
      priceDescription: 'Per Design',
      title: 'Landing Page',
      titleDescription: 'When you’re ready to go beyond prototyping in Figma, ',
      benefitsList: [
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
      ],
    },
    {
      id: 2,
      price: '$399',
      priceDescription: 'Multi Design',
      title: 'Website Page',
      titleDescription: 'When you’re ready to go beyond prototyping in Figma,',
      benefitsList: [
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
      ],
    },
    {
      id: 3,
      price: '$499+',
      priceDescription: 'Per Design',
      title: 'Complex Project',
      titleDescription: 'When you’re ready to go beyond prototyping in Figma, ',
      benefitsList: [
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
        'Assist and Help',
      ],
    },
  ];

  return (
    <section className="w-full px-8 py-20 lg:pt-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center font-poppins text-4xl font-semibold leading-snug text-dark-blue lg:text-5xl">
            Our Pricing Plans
          </h1>
          <p className="text-center font-poppins text-base font-medium leading-7 text-dark-blue opacity-70 lg:w-2/3 lg:text-start xl:w-[51%]">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          {plans.map((item) => (
            <PricingCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
