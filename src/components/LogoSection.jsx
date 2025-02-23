function LogoSection() {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-[5.5rem]">
      <div className="flex flex-col">
        <h3 className="text-start font-poppins text-3xl font-semibold leading-normal text-dark-blue sm:text-4xll">
          100.000+
        </h3>
        <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
          Finsweet Users
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-[4.5rem]">
        <img className="h-8" src="/assets/Logo 1.png" alt="Logo 1" />
        <img className="h-8" src="/assets/Logo 2.png" alt="Logo 1" />
        <img className="h-8" src="/assets/Logo 3.png" alt="Logo 1" />
        <img className="h-8" src="/assets/Logo 4.png" alt="Logo 1" />
        <img className="h-8" src="/assets/Logo 5.png" alt="Logo 1" />
      </div>
    </div>
  );
}

export default LogoSection;
