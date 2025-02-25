import { getTemplates } from '../services/templates.services';
import TemplateCard from './TemplateCard';

function OurWork() {
  const templates = getTemplates();

  return (
    <section className="w-full px-8 py-20 lg:py-24 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-12">
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-7">
          <li>
            <button className="font-poppins text-base font-normal leading-8 text-royal-blue opacity-70 sm:text-lg">
              All
            </button>
          </li>
          <li>
            <button className="font-poppins text-base font-normal leading-8 text-dark-blue opacity-70 sm:text-lg">
              UI Design
            </button>
          </li>
          <li>
            <button className="font-poppins text-base font-normal leading-8 text-dark-blue opacity-70 sm:text-lg">
              Webflow Design
            </button>
          </li>
          <li>
            <button className="font-poppins text-base font-normal leading-8 text-dark-blue opacity-70 sm:text-lg">
              Figma Design
            </button>
          </li>
        </ul>
        <div className="grid-col-1 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {templates.map((template) => (
            <TemplateCard key={template.id} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
