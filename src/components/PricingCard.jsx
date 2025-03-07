function PricingCard({
  price,
  priceDescription,
  title,
  titleDescription,
  benefitsList,
}) {
  return (
    <div className="group flex flex-col items-start justify-between rounded-xl bg-grey px-6 py-8 hover:bg-tint-blue sm:px-12 sm:py-16">
      <div className="flex items-center gap-2 pb-5">
        <h3 className="font-poppins text-3xl font-semibold leading-normal text-dark-blue group-hover:text-white sm:text-4xll">
          {price}
        </h3>
        <p className="font-poppins text-sm font-normal leading-7 text-royal-blue group-hover:text-yelow sm:text-base">
          {priceDescription}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="font-poppins text-xl font-medium leading-9 text-dark-blue group-hover:text-white sm:text-2xl">
          {title}
        </h6>
        <p className="font-poppins text-sm font-medium leading-7 text-dark-blue opacity-70 group-hover:text-white sm:text-base">
          {titleDescription}
        </p>
      </div>
      <ul className="flex flex-col gap-2 py-10 sm:gap-5 sm:py-20">
        {benefitsList.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <img src="/assets/pointerActive.png" alt="pointer" />
            <p className="font-poppins text-sm font-normal leading-7 text-dark-blue group-hover:text-white sm:text-base">
              {benefit}
            </p>
          </li>
        ))}
      </ul>

      <button className="w-full self-center rounded-custom-41 bg-dark-blue py-4 font-poppins text-base font-medium leading-8 text-grey group-hover:bg-yelow group-hover:text-dark-blue sm:text-lg">
        Get started
      </button>
    </div>
  );
}

export default PricingCard;
