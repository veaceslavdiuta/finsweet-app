import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    context: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.prevenDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <main className="container mx-auto max-w-screen-xl py-32">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
            Contact Us
          </h1>
          <p className="w-2/3 text-center font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="w-full max-w-screen-lg rounded-xl bg-grey px-16 py-20">
          <form
            onSubmit={handleSumbit}
            className="flex flex-wrap gap-x-8 gap-y-6"
          >
            <div className="flex w-full flex-col gap-2 md:w-[calc(50%-1rem)]">
              <label
                className="font-poppins text-lg font-normal leading-8"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full rounded-lg border border-[rgba(0,0,0,0.12)] bg-grey px-8 py-5 font-poppins text-base font-normal leading-7 outline-none"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-[calc(50%-1rem)]">
              <label
                className="font-poppins text-lg font-normal leading-8"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-lg border border-[rgba(0,0,0,0.12)] bg-grey px-8 py-5 font-poppins text-base font-normal leading-7 outline-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-[calc(50%-1rem)]">
              <label
                className="font-poppins text-lg font-normal leading-8"
                htmlFor="context"
              >
                Context
              </label>
              <input
                className="w-full rounded-lg border border-[rgba(0,0,0,0.12)] bg-grey px-8 py-5 font-poppins text-base font-normal leading-7 outline-none"
                type="text"
                name="context"
                value={formData.context}
                onChange={handleChange}
                placeholder="Provide context"
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-[calc(50%-1rem)]">
              <label
                className="font-poppins text-lg font-normal leading-8"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full rounded-lg border border-[rgba(0,0,0,0.12)] bg-grey px-8 py-5 font-poppins text-base font-normal leading-7 outline-none"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Select Subject"
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label
                className="font-poppins text-lg font-normal leading-8"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="h-[138px] w-full rounded-lg border border-[rgba(0,0,0,0.12)] bg-grey px-8 py-5 font-poppins text-base font-normal leading-7 outline-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your question here"
              />
            </div>

            <button className="w-1/3 rounded-custom-41 bg-dark-blue px-12 py-4 font-poppins text-lg font-normal text-white hover:bg-hover-yelow hover:text-dark-blue">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
