import FeaturesHero from '../components/FeaturesHero';
import OurBenefits from '../components/OurBenefits';

function Features() {
  return (
    <main className="flex flex-col">
      <FeaturesHero />
      <OurBenefits isFeaturePage={true} />
    </main>
  );
}

export default Features;
