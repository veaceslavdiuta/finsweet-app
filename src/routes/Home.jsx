import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import KeyFeatures from '../components/KeyFeatures';
import OurProjects from '../components/OurProjects';

function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
      <OurProjects />
      <KeyFeatures />
    </main>
  );
}

export default Home;
