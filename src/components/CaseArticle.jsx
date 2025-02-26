function CaseArticle(props) {
  return (
    <section className="w-full px-8">
      <div className="container mx-auto flex flex-col gap-16 pb-20 lg:w-[840px] lg:pb-28">
        <div className="flex flex-col gap-3 md:gap-6">
          <h3 className="font-poppins text-3xl font-semibold leading-normal text-dark-blue sm:text-4xll">
            About the project
          </h3>
          <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
            {props.aboutCase}
          </p>
          <ul className="flex list-disc flex-col gap-4 pl-[18px]">
            {props.aboutCaseSteps.map((step, index) => (
              <li
                key={index}
                className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base"
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="p-6 lg:px-14 lg:py-11"
          style={{
            background: props.templateBackground,
          }}
        >
          <img
            src="/assets/readCaseImg2.png"
            className="h-full w-full"
            alt="imageCase"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-6">
          <h3 className="font-poppins text-3xl font-semibold leading-normal text-dark-blue sm:text-4xll">
            How we do it
          </h3>
          <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
            {props.howWeDoCase}
          </p>
          <ul className="flex list-disc flex-col gap-4 pl-[18px]">
            {props.howWeDoCaseSteps.map((step, index) => (
              <li
                key={index}
                className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base"
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CaseArticle;
