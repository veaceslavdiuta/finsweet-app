import { getTemplates } from '../services/templates.services';
import TemplateCard from './TemplateCard';

function OurWork() {
  const templates = getTemplates();

  return (
    <section className="py- flex w-full justify-center py-24">
      <div className="flex w-full max-w-screen-xl flex-col gap-12">
        <ul className="flex justify-center gap-7">
          <li>
            <button className="font-poppins text-lg font-normal leading-8 text-royal-blue opacity-70">
              All
            </button>
          </li>
          <li>
            <button className="font-poppins text-lg font-normal leading-8 text-dark-blue opacity-70">
              UI Design
            </button>
          </li>
          <li>
            <button className="font-poppins text-lg font-normal leading-8 text-dark-blue opacity-70">
              Webflow Design
            </button>
          </li>
          <li>
            <button className="font-poppins text-lg font-normal leading-8 text-dark-blue opacity-70">
              Figma Design
            </button>
          </li>
        </ul>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-16">
          {templates.map((template) => (
            <TemplateCard key={template.id} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
