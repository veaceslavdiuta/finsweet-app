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
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
        <h2 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          The process we follow
        </h2>
        <div className="flex gap-14">
          {processSteps.map(({ id, processName, processDescription }) => (
            <div key={id} className="flex flex-col gap-8">
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
