import TemplateCard from './TemplateCard';

function OurWork() {
  const templates = [
    {
      id: 1,
      templateNumber: 'Template 1',
      templateDescription:
        ' Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      templateImage: 'template1.png',
      templateLinkName: 'View Portfolio',
      templateBackground:
        'linear-gradient(131deg, #F4EDE1 16.74%, #98B1C6 103.17%)',
    },
    {
      id: 2,
      templateNumber: 'Template 2',
      templateDescription:
        ' Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      templateImage: 'template2.png',
      templateLinkName: 'View Portfolio',
      templateBackground:
        'linear-gradient(131deg, #FFD3AF 16.74%, #4F56FF 103.17%)',
    },
    {
      id: 3,
      templateNumber: 'Template 3',
      templateDescription:
        ' Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      templateImage: 'template3.png',
      templateLinkName: 'Read case study',
      templateBackground:
        'linear-gradient(131deg, #EEBCA7 16.74%, #C8C8C8 103.17%)',
    },
    {
      id: 4,
      templateNumber: 'Template 4',
      templateDescription:
        ' Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      templateImage: 'template4.png',
      templateLinkName: 'Read case study',
      templateBackground:
        'linear-gradient(131deg, #C2E7F2 16.74%, #98A4FF 103.17%)',
    },
    {
      id: 5,
      templateNumber: 'Template 5',
      templateDescription:
        ' Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      templateImage: 'template5.png',
      templateLinkName: 'Read case study',
      templateBackground:
        'linear-gradient(131deg, #C5BCFF 16.74%, #9BF6D5 103.17%)',
    },
    {
      id: 6,
      templateNumber: 'Template 6',
      templateDescription:
        ' Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.',
      templateImage: 'template6.png',
      templateLinkName: 'Read case study',
      templateBackground:
        'linear-gradient(131deg, #D2D6FD 16.74%, #D6ACEA 103.17%)',
    },
  ];

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
