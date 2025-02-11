import FAQSection from '../components/FAQSection';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import InquiryForm from '../components/InquiryForm';
import KeyFeatures from '../components/KeyFeatures';
import OurBlog from '../components/OurBlog';
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
      <FAQSection />
      <InquiryForm />
      <OurBlog />
    </main>
  );
}

export default Home;
