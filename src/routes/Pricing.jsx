import FAQSection from '../components/FAQSection';
import PricingPlans from '../components/PricingPlans';

function Pricing() {
  return (
    <main className="flex flex-col">
      <PricingPlans />
      <FAQSection />
    </main>
  );
}

export default Pricing;
