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
      titleDescription:
        'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.',
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
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
            Our Pricing Plans
          </h1>
          <p className="w-[51%] font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className="flex justify-between gap-8">
          {plans.map((item) => (
            <PricingCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
