import { useState } from 'react';

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
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl justify-between gap-36">
        <div className="flex w-[29%] flex-col items-start gap-4">
          <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
            Frequently asked questions
          </h3>
          <button className="font-poppins text-lg font-medium leading-8 text-royal-blue hover:text-tint-blue">
            Contact us for more info
          </button>
        </div>
        <div className="flex w-[71%] flex-col">
          {questions.map(({ number, question, answer }, index) => (
            <div
              key={number}
              className="flex gap-14 border-b-2 border-smoke-white py-8 first:pt-0 last:border-none"
            >
              <h4 className="font-poppins text-2xl font-normal leading-9 text-royal-blue">
                {number}
              </h4>
              <div className="flex flex-col gap-4">
                <h4
                  onClick={() => handleToggleAnswer(index)}
                  className="cursor-pointer font-poppins text-2xl font-medium leading-9 text-dark-blue"
                >
                  {question}
                </h4>
                <p
                  className={`font-poppins text-lg leading-8 text-dark-blue opacity-85 transition-all duration-500 ${
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
