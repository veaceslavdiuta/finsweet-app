import FAQSection from '../components/FAQSection';
import HomeHero from '../components/HomeHero';
import HowItWorks from '../components/HowItWorks';
import InquiryForm from '../components/InquiryForm';
import KeyFeatures from '../components/KeyFeatures';
import OurBlog from '../components/OurBlog';
import OurProjects from '../components/OurProjects';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <main className="flex flex-col">
      <HomeHero />
      <HowItWorks />
      <OurProjects />
      <KeyFeatures />
      <Testimonials />
      <FAQSection />
      <InquiryForm />d
      <OurBlog />
    </main>
  );
}

export default Home;
