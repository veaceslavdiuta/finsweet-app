function PricingCard({
  price,
  priceDescription,
  title,
  titleDescription,
  benefitsList,
}) {
  return (
    <div className="group flex w-[406px] flex-col items-start justify-between rounded-xl bg-grey py-16 pl-12 pr-[77px] hover:bg-tint-blue">
      <div className="flex items-center gap-2 pb-5">
        <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue group-hover:text-white">
          {price}
        </h3>
        <p className="font-poppins text-base font-normal leading-7 text-royal-blue group-hover:text-yelow">
          {priceDescription}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="font-poppins text-2xl font-medium leading-9 text-dark-blue group-hover:text-white">
          {title}
        </h6>
        <p className="font-poppins text-base font-medium leading-7 text-dark-blue opacity-70 group-hover:text-white">
          {titleDescription}
        </p>
      </div>
      <ul className="flex flex-col gap-5 py-20">
        {benefitsList.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <img src="/assets/pointerActive.png" alt="pointer" />
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue group-hover:text-white">
              {benefit}
            </p>
          </li>
        ))}
      </ul>

      <button className="w-full self-center rounded-custom-41 bg-dark-blue py-4 font-poppins text-lg font-medium leading-8 text-grey group-hover:bg-yelow group-hover:text-dark-blue">
        Get started
      </button>
    </div>
  );
}

export default PricingCard;
