function OurProcess() {
  const processSteps = [
    {
      id: 1,
      processName: 'Planning',
      processDescription:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {
      id: 2,
      processName: 'Conception',
      processDescription:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {
      id: 3,
      processName: 'Design',
      processDescription:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {
      id: 4,
      processName: 'Development',
      processDescription:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
  ];

  return (
    <section className="w-full px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-12">
        <h2 className="text-center font-poppins text-4xl font-semibold leading-snug text-dark-blue sm:text-5xl lg:text-start">
          The process we follow
        </h2>
        <div className="flex flex-wrap gap-14 lg:flex-nowrap">
          {processSteps.map(({ id, processName, processDescription }) => (
            <div
              key={id}
              className="flex flex-col justify-center gap-4 sm:gap-8"
            >
              <div className="flex items-center gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="12" fill="#2405F2" />
                </svg>
                <div className="w-full border-2 border-dashed border-royal-blue opacity-40"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="font-poppins text-2xl font-medium leading-9 text-dark-blue">
                  {processName}
                </h5>
                <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
                  {processDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
