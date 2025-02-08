import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import KeyFeatures from '../components/KeyFeatures';
import OurProjects from '../components/OurProjects';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
      <OurProjects />
      <KeyFeatures />
      <Testimonials />
    </main>
  );
}

export default Home;
