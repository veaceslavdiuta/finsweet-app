import { Link } from 'react-router-dom';

function CallToActionSection() {
  return (
    <section className="w-full px-8 pb-32 pt-8 xl:px-0">
      <div className="container mx-auto flex flex-col items-center gap-5 md:w-1/2 xl:w-[35%]">
        <h2 className="text-center font-poppins text-4xl font-semibold leading-snug text-dark-blue sm:text-5xl">
          Let's build something great together
        </h2>
        <p className="text-center font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies nec dolor sit amet, scelerisque cursus purus.
        </p>
        <Link
          className="rounded-custom-41 bg-yelow px-8 py-2 font-poppins text-base font-semibold leading-8 text-dark-blue hover:bg-hover-yelow sm:px-16 sm:py-4 sm:text-lg"
          to="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default CallToActionSection;
