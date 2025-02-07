function KeyFeatures() {
  const featureCard = [
    {
      id: 1,
      featureName: 'Uses Client First',
      featureDescription:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam sed faucib turpis eu gravida mi. Pellentesque et velitaliquam sed mi.',
      featureIcon: 'Icon1.png',
    },
    {
      id: 2,
      featureName: 'Two Free Revision Round',
      featureDescription:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam sed faucib turpis eu gravida mi. Pellentesque et velitaliquam sed mi.',
      featureIcon: 'Icon2.png',
    },
    {
      id: 3,
      featureName: 'Template Customization',
      featureDescription:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam sed faucib turpis eu gravida mi. Pellentesque et velitaliquam sed mi.',
      featureIcon: 'Icon3.png',
    },
    {
      id: 4,
      featureName: '24/7 Support',
      featureDescription:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam sed faucib turpis eu gravida mi. Pellentesque et velitaliquam sed mi.',
      featureIcon: 'Icon4.png',
    },
    {
      id: 5,
      featureName: 'Quick Delivery',
      featureDescription:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam sed faucib turpis eu gravida mi. Pellentesque et velitaliquam sed mi.',
      featureIcon: 'Icon5.png',
    },
    {
      id: 6,
      featureName: 'Hands-on approach',
      featureDescription:
        'Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam sed faucib turpis eu gravida mi. Pellentesque et velitaliquam sed mi.',
      featureIcon: 'Icon6.png',
    },
  ];

  return (
    <section className="flex w-full justify-center bg-grey py-32">
      <div className="flex w-full max-w-screen-xl flex-col items-center">
        <h5 className="text-center font-poppins text-base font-medium leading-7 text-dark-blue">
          Features
        </h5>
        <h2 className="w-1/2 text-center font-poppins text-5xl font-semibold leading-tight text-dark-blue">
          Design that solves problems, one product at a time
        </h2>
        <div className="grid grid-cols-3 gap-8 pt-12">
          {featureCard.map((item) => (
            <div
              className="flex flex-col items-start gap-3 bg-white p-12"
              key={item.id}
            >
              <img src={`/assets/${item.featureIcon}`} alt="IconCard" />
              <h4 className="font-poppins text-2xl font-normal leading-9 text-dark-blue">
                {item.featureName}
              </h4>
              <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
                {item.featureDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
