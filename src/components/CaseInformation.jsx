function CaseInformation(props) {
  return (
    <section className="w-full px-8 py-20 lg:py-24 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-lg flex-col gap-6 lg:gap-12">
        <div className="flex flex-col items-start gap-4">
          <h6 className="font-poppins text-xl font-normal leading-9 text-dark-blue opacity-80 sm:text-2xl">
            Web design and development
          </h6>
          <h2 className="font-poppins text-3xl font-semibold leading-snug text-dark-blue md:text-4xl lg:w-[65%] lg:text-5xl">
            {props.caseName}
          </h2>
          <p className="font-poppins text-sm font-medium leading-7 text-dark-blue opacity-70 sm:text-base md:w-[80%]">
            {props.caseDescription}
          </p>
        </div>
        <div
          className="p-7 md:px-14 md:py-10 lg:px-20 lg:py-16"
          style={{
            background: props.templateBackground,
          }}
        >
          <img
            className="h-full w-full"
            src={`/assets/${props.templateImage}`}
            alt={props.templateImage}
          />
        </div>
        <div className="flex flex-wrap justify-between border-b border-b-tint-blue border-opacity-30 pb-8">
          <div>
            <p className="font-poppins text-sm font-medium leading-7 text-dark-blue opacity-70 sm:text-base">
              Client
            </p>
            <h6 className="font-poppins text-xl font-medium leading-9 text-dark-blue sm:text-2xl">
              {props.caseClient}
            </h6>
          </div>
          <div>
            <p className="font-poppins text-sm font-medium leading-7 text-dark-blue opacity-70 sm:text-base">
              Service
            </p>
            <h6 className="font-poppins text-xl font-medium leading-9 text-dark-blue sm:text-2xl">
              {props.caseService}
            </h6>
          </div>
          <div>
            <p className="font-poppins font-medium leading-7 text-dark-blue opacity-70 sm:text-base">
              Deliverable
            </p>
            <h6 className="font-poppins text-xl font-medium leading-9 text-dark-blue sm:text-2xl">
              {props.caseDeliverable}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseInformation;
