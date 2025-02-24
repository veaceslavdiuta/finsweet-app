function FeatureSection({
  id,
  featureName,
  featureTitle,
  featureDescription,
  featureImage,
  background,
}) {
  return (
    <section
      key={id}
      className={`w-full ${background === 'smokeyelow' ? 'bg-smokeyelow' : `bg-${background}`} ${id === 1 ? 'pt-0' : ''} px-8 py-20 lg:py-32 2xl:px-0`}
    >
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-20 lg:gap-24">
        <div
          className={`flex flex-col items-center gap-10 lg:flex-row xl:gap-20 ${id % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins text-base font-medium leading-8 text-black opacity-85 sm:text-lg">
              {featureName}
            </h4>
            <h3 className="text-center font-poppins text-3xl font-semibold leading-9 text-dark-blue sm:text-4xll sm:leading-normal lg:text-start">
              {featureTitle}
            </h3>
            <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-60 sm:text-base lg:text-start">
              {featureDescription}
            </p>
          </div>
          <img src={`/assets/${featureImage}`} alt={featureImage} />
        </div>
      </div>
    </section>
  );
}
export default FeatureSection;
