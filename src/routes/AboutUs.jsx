import AboutUsHero from '../components/AboutUsHero';
import OurProcess from '../components/OurProcess';
import WhoWeAre from '../components/WhoWeAre';

function AboutUs() {
  return (
    <main className="flex flex-col">
      <AboutUsHero />
      <WhoWeAre />
      <OurProcess />
      <section></section>
      <section></section>
    </main>
  );
}

export default AboutUs;
