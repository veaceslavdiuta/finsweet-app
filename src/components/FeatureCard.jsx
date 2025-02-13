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
      className={`flex w-full justify-center ${background === 'smokeyelow' ? 'bg-smokeyelow' : `bg-${background}`} ${id === 1 ? 'pt-0' : ''} py-32`}
    >
      <div className="flex w-full max-w-screen-xl flex-col gap-24">
        <div
          className={`flex items-center gap-20 ${id % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins text-lg font-medium leading-8 text-black opacity-85">
              {featureName}
            </h4>
            <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
              {featureTitle}
            </h3>
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-60">
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
