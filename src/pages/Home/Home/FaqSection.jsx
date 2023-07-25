import { useState } from 'react';
import animationData from './FAQ.json'
import { useLottie } from 'lottie-react';
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'How Can I Enroll Course?',
      answer:
        'First you should have to login to Hello Summer then Select your desired Course and go to dashboard >my selected class and then Pay for your Course.'
    },
    {
      question: 'Are materials provided for the courses?',
      answer:
        'Yes, all necessary materials and supplies for the courses are provided. You don\'t need to bring anything from home.'
    },
    {
      question: 'What are the class sizes?',
      answer:
        'We maintain small class sizes to ensure personalized attention and guidance. The maximum class size is 15 students per instructor.'
    },

  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const {View} = useLottie(options);

  return (
    <div className='my-20 container mx-auto'>
      <h1 className='font-bold text-center text-5xl text-stone-800  mb-8 mt-20'>Frequently Asked Questions</h1>
      <div className='flex justify-center flex-col md:flex-row items-center' >
        {/* <img className=' ' src='https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?size=626&ext=jpg&uid=R90445011&ga=GA1.2.576645490.1680271128&semt=sph' alt="" /> */}
        <div className='w-96'>
        {View}
        </div>
        <div className="w-full mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4"
            >
              <button
                className="flex items-center justify-between w-full focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
