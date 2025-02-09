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
  return (
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl justify-between gap-36">
        <div className="flex w-[29%] flex-col items-start gap-4">
          <h3 className="text-4xll font-poppins font-semibold leading-normal text-dark-blue">
            Frequently asked questions
          </h3>
          <button className="font-poppins text-lg font-medium leading-8 text-royal-blue">
            Contact us for more info
          </button>
        </div>
        <div className="flex w-[71%] flex-col">
          {questions.map(({ number, question, answer }) => (
            <div
              key={number}
              className="border-smoke-white flex gap-14 border-b-2 py-8 first:pt-0 last:border-none"
            >
              <h4 className="font-poppins text-2xl font-normal leading-9 text-royal-blue">
                {number}
              </h4>
              <h4 className="font-poppins text-2xl font-medium leading-9 text-dark-blue">
                {question}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
