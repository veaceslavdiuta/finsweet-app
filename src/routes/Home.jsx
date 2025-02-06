import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
    </main>
  );
}

export default Home;
