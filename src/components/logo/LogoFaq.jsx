import React, { useState } from "react";

const faqs = [
    {
      question: "How much does logo design cost?",
      answer: (
        <>
          Costs depend on the complexity and customization. A basic logo design might range from $500 to $2,000, while highly customized or brand identity-focused designs can exceed $5,000.
        </>
      ),
    },
    {
      question: "How long does the logo design process take?",
      answer: (
        <>
          A standard logo design project typically takes between 2-4 weeks, depending on revisions and the complexity of the design.
        </>
      ),
    },
    {
      question: "Why choose Cubix for logo design?",
      answer: (
        <>
          With over 10 years of design experience and a portfolio of 300+ successful logos, Cubix is trusted by leading brands for its creative and impactful logo design services.
        </>
      ),
    },
  ];
  

export default function LogoFaq() {
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
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300 px-32">Common questions about web development.</h1>

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
