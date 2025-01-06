import React, { useState } from "react";

const faqs = [
    {
      question: "How much does branding services cost?",
      answer: (
        <>
          Costs vary depending on the scope and complexity of the project. A basic logo design might range from $500 to $2,000, while a complete brand identity package can exceed $5,000.
        </>
      ),
    },
    {
      question: "How long does the branding process take?",
      answer: (
        <>
          A typical branding project takes 2-6 weeks, depending on the complexity of the services required and the number of revisions.
        </>
      ),
    },
    {
      question: "Why choose AKC for branding services?",
      answer: (
        <>
          With over 10 years of experience in creating impactful brand identities and a portfolio of 300+ successful projects, AKC is trusted by top companies to deliver memorable and cohesive branding solutions.
        </>
      ),
    },
  ];
  

export default function BrandingFaq() {
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
