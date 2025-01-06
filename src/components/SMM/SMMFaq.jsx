import React, { useState } from "react";

const faqs = [
    {
      question: "How much do Social Media Marketing services cost?",
      answer: (
        <>
          Costs vary based on the scope and platforms involved. A basic SMM package can start from $1,000 per month, while comprehensive campaigns with ads and strategy development can exceed $5,000 per month.
        </>
      ),
    },
    {
      question: "How long does an SMM campaign take?",
      answer: (
        <>
          An SMM campaign typically runs for 3-6 months to ensure effective audience engagement and measurable results.
        </>
      ),
    },
    {
      question: "Why choose AKC for Social Media Marketing?",
      answer: (
        <>
          With over 10 years of experience in creating successful social media campaigns and managing top brands, AKC is trusted for delivering measurable growth, high engagement, and strong brand presence online.
        </>
      ),
    },
  ];
  
  

export default function SMMFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active item
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-left mb-6 text-yellow-500 px-32">Common questions about web development.</h1>

      <div className="w-3/5 md:w-4/5">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-transparent p-4 rounded-lg cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="text-lg font-semibold bg-transparent">{faq.question}</div>
              <div
                className={`transform transition-all duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                &#43;
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-blue-400 rounded-3xl">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
