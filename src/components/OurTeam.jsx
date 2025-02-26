function OurTeam() {
  const members = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO',
      image: 'imageCEO.png',
    },
    {
      id: 2,
      name: 'Simon Adams',
      position: 'CTO',
      image: 'imageCTO.png',
    },
    {
      id: 3,
      name: 'Paul Jones',
      position: 'Design Lead',
      image: 'imageDL.png',
    },
    {
      id: 4,
      name: 'Sara Hardin',
      position: 'Project Manager',
      image: 'imagePM.png',
    },
  ];

  return (
    <section className="w-full bg-grey px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-12">
        <h2 className="text-center font-poppins text-4xl font-semibold leading-snug text-dark-blue md:text-5xl">
          Meet our team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {members.map(({ id, name, position, image }) => (
            <div
              key={id}
              className="p flex flex-col items-center gap-7 bg-white py-12"
            >
              <div className="group relative cursor-pointer">
                <img
                  className="px-8 transition-opacity duration-300 md:px-16"
                  src={`/assets/${image}`}
                  alt={image}
                />
                <div className="to-transparent absolute bottom-0 left-8 h-full w-[72%] rounded-[168px] bg-gradient-to-t from-royal-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:left-16 md:w-[57%]"></div>
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-poppins text-2xl font-medium leading-7 text-dark-blue">
                  {name}
                </h6>
                <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
                  {position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
