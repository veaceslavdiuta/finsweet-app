function HowItWorks() {
  const workSteps = [
    {
      id: 1,
      stepName: 'Strategy',
      stepDescription:
        ' Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam.',
      stepImage: 'Mask1.png',
    },
    {
      id: 2,
      stepName: 'Wireframing',
      stepDescription:
        ' Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam.',
      stepImage: 'Mask2.png',
    },
    {
      id: 3,
      stepName: 'Design',
      stepDescription:
        ' Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam.',
      stepImage: 'Mask3.png',
    },
    {
      id: 4,
      stepName: 'Development',
      stepDescription:
        ' Euismod faucibus turpis eu gravida mi. Pellentesque et velitaliquam.',
      stepImage: 'Mask4.png',
    },
  ];

  return (
    <section className="flex w-full justify-center bg-grey py-32">
      <div className="flex w-full max-w-screen-xl gap-x-36">
        <div className="flex flex-col gap-4">
          <h2 className="font-poppins text-5xl font-semibold leading-tight">
            How we work
          </h2>
          <p className="font-poppins text-base font-normal leading-7 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="group flex items-center gap-4 font-poppins text-lg font-normal leading-8 text-royal-blue hover:text-tint-blue">
            Get in touch with us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                className="stroke-[#2405F2] group-hover:stroke-tint-blue"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12">
          {workSteps.map((item) => (
            <div className="flex flex-col items-start gap-4" key={item.id}>
              <img src={`/assets/${item.stepImage}`} alt="MaskGroup" />
              <h4 className="font-poppins text-3xll font-medium">
                {item.stepName}
              </h4>
              <p className="font-poppins text-base font-normal leading-7 opacity-70">
                {item.stepDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
