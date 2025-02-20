import { Link } from 'react-router-dom';

function CallToActionSection() {
  return (
    <section className="flex w-full justify-center pb-32 pt-8">
      <div className="flex w-[35%] max-w-screen-xl flex-col items-center gap-5">
        <h2 className="text-center font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          Let's build something great together
        </h2>
        <p className="text-center font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies nec dolor sit amet, scelerisque cursus purus.
        </p>
        <Link
          className="rounded-custom-41 bg-yelow px-16 py-4 font-poppins text-lg font-semibold leading-8 text-dark-blue hover:bg-hover-yelow"
          to="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default CallToActionSection;
