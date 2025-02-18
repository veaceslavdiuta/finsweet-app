function CaseArticle(props) {
  return (
    <section className="flex w-full justify-center">
      <div className="flex w-[840px] flex-col gap-16 pb-28">
        <div className="flex flex-col gap-6">
          <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
            About the project
          </h3>
          <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
            {props.aboutCase}
          </p>
          <ul className="flex list-disc flex-col gap-4 pl-[18px]">
            {props.aboutCaseSteps.map((step, index) => (
              <li
                key={index}
                className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70"
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="px-14 py-11"
          style={{
            background: props.templateBackground,
          }}
        >
          <img src="/assets/readCaseImg2.png" alt="imageCase" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
            How we do it
          </h3>
          <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
            {props.howWeDoCase}
          </p>
          <ul className="flex list-disc flex-col gap-4 pl-[18px]">
            {props.howWeDoCaseSteps.map((step, index) => (
              <li
                key={index}
                className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70"
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
