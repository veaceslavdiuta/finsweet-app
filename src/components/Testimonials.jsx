import { useState } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Jenny Wilson',
      review:
        '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
      image: '/assets/userProfile.png',
      position: 'Vice President',
    },
    {
      id: 2,
      name: 'Jane Doe',
      review:
        '"Working with this team has been a great experience. Their dedication and problem-solving skills are outstanding! Highly recommended!"',
      image: '/assets/userProfile2.jpg',
      position: 'CEO, TechCorp',
    },
    {
      id: 3,
      name: 'Sara Lee',
      review:
        '"Exceptional service! They delivered everything on time and exceeded our expectations in every way possible. Highly recommended!"',
      image: '/assets/userProfile3.jpg',
      position: 'Marketing Director',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full bg-grey bg-opacity-50 px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-28">
        <div className="flex w-full flex-col items-center gap-2 sm:gap-4 lg:w-[30%]">
          <h4 className="text-center font-poppins text-4xl font-semibold leading-normal text-dark-blue sm:text-4xll lg:text-start">
            What our clients say about us.
          </h4>
          <p className="text-center font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="flex w-full flex-col gap-12 lg:w-[70%]">
          <h5 className="font-poppins text-2xl font-medium leading-normal text-dark-blue sm:text-3xll">
            {testimonials[currentIndex].review}
          </h5>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].image}
              />
              <div className="flex flex-col">
                <h6 className="font-poppins text-base font-normal leading-8 text-dark-blue sm:text-lg">
                  {testimonials[currentIndex].name}
                </h6>
                <p className="font-poppins text-xs font-normal leading-7 text-dark-blue">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="border-gray-300 text-gray-700 flex h-11 w-12 items-center justify-center rounded-full border-none text-2xl transition hover:bg-[#5239FA] hover:text-white"
              >
                &lt;
              </button>

              <button
                onClick={handleNext}
                className="border-gray-300 text-gray-700 flex h-11 w-12 items-center justify-center rounded-full border-none text-2xl transition hover:bg-[#5239FA] hover:text-white"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
