import { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQSection() {
  const questions = [
    {
      number: '01',
      question: 'How much time does it take?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '02',
      question: 'What is your class naming convention?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '03',
      question: ' How do you comunicate??',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '04',
      question: 'I have a bigger project. Can you handle it?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '05',
      question: 'What is your class naming convention?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full px-8 py-20 lg:py-32 2xl:px-0">
      <div className="container mx-auto flex max-w-screen-xl flex-col justify-between gap-16 lg:flex-row lg:gap-36">
        <div className="flex w-full flex-col items-center gap-4 lg:w-[29%] lg:items-start">
          <h3 className="text-center font-poppins text-4xl font-semibold leading-normal text-dark-blue md:text-4xll lg:text-start">
            Frequently asked questions
          </h3>
          <Link
            to="/contact-us"
            className="font-poppins text-base font-medium leading-8 text-royal-blue hover:text-tint-blue sm:text-lg"
          >
            Contact us for more info
          </Link>
        </div>
        <div className="flex w-full flex-col lg:w-[71%]">
          {questions.map(({ number, question, answer }, index) => (
            <div
              key={number}
              className="flex gap-14 border-b-2 border-smoke-white py-4 first:pt-0 last:border-none sm:py-8"
            >
              <h4 className="font-poppins text-xl font-normal leading-9 text-royal-blue sm:text-2xl">
                {number}
              </h4>
              <div className="flex flex-col gap-4">
                <h4
                  onClick={() => handleToggleAnswer(index)}
                  className="cursor-pointer font-poppins text-xl font-medium leading-6 text-dark-blue sm:leading-9 lg:text-2xl"
                >
                  {question}
                </h4>
                <p
                  className={`font-poppins text-base leading-5 text-dark-blue opacity-85 transition-all duration-500 sm:text-lg sm:leading-8 ${
                    openIndex === index
                      ? 'max-h-40 opacity-100'
                      : 'max-h-0 overflow-hidden opacity-0'
                  }`}
                >
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
