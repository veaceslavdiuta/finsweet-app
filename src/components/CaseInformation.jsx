function CaseInformation(props) {
  return (
    <section className="flex w-full justify-center py-24">
      <div className="flex w-full max-w-screen-lg flex-col gap-12">
        <div className="flex flex-col items-start gap-4">
          <h6 className="font-poppins text-2xl font-normal leading-9 text-dark-blue opacity-80">
            Web design and development
          </h6>
          <h2 className="w-[65%] font-poppins text-5xl font-semibold leading-snug text-dark-blue">
            {props.caseName}
          </h2>
          <p className="w-[80%] font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
            {props.caseDescription}
          </p>
        </div>
        <div
          className="px-20 py-16"
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
        <div className="flex justify-between border-b border-b-tint-blue border-opacity-30 pb-8">
          <div>
            <p className="font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
              Client
            </p>
            <h6 className="font-poppins text-2xl font-medium leading-9 text-dark-blue">
              {props.caseClient}
            </h6>
          </div>
          <div>
            <p className="font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
              Service
            </p>
            <h6 className="font-poppins text-2xl font-medium leading-9 text-dark-blue">
              {props.caseService}
            </h6>
          </div>
          <div>
            <p className="font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
              Deliverable
            </p>
            <h6 className="font-poppins text-2xl font-medium leading-9 text-dark-blue">
              {props.caseDeliverable}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseInformation;
