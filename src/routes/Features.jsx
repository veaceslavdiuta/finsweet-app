import FAQSection from '../components/FAQSection';
import FeatureCard from '../components/FeatureCard';
import FeaturesHero from '../components/FeaturesHero';
import OurBenefits from '../components/OurBenefits';

function Features() {
  const featureSections = [
    {
      id: 1,
      featureName: 'Use Client-first',
      featureTitle:
        'Top agencies and freelancers around the world use Client-first',
      featureDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      featureImage: 'imageClientFirst.png',
      background: 'white',
    },
    {
      id: 2,
      featureName: 'Free Revision Rounds',
      featureTitle: 'Get free Revisions and one week of free maintenance',
      featureDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      featureImage: 'imageRevision.png',
      background: 'grey',
    },
    {
      id: 3,
      featureName: '24/7 Support',
      featureTitle:
        'Working with us, you will be getting 24/7 priority support',
      featureDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      featureImage: 'imageSupport.png',
      background: 'white',
    },
    {
      id: 4,
      featureName: 'Quick Delivery',
      featureTitle: 'Guranteed 1 week delivery for standard five pager website',
      featureDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      featureImage: 'imageQuickDel.png',
      background: 'smokeyelow',
    },
  ];

  return (
    <main className="flex flex-col">
      <FeaturesHero />
      <OurBenefits isFeaturePage={true} />

      {featureSections.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}

      <FAQSection />
    </main>
  );
}

export default Features;
