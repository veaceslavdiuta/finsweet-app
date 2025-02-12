import AboutUsHero from '../components/AboutUsHero';
import WhoWeAre from '../components/WhoWeAre';
import OurProcess from '../components/OurProcess';
import OurMission from '../components/OurMission';
import OurBenefits from '../components/OurBenefits';
import OurTeam from '../components/OurTeam';

function AboutUs() {
  return (
    <main className="flex flex-col">
      <AboutUsHero />
      <WhoWeAre />
      <OurProcess />
      <OurMission />
      <OurBenefits />
      <OurTeam />
    </main>
  );
}

export default AboutUs;
