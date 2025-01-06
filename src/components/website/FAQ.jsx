import React, { useState } from "react";

const faqs = [
  {
    question: "How much does web development cost?",
    answer: (
      <>
        Costs vary based on complexity. For instance, a simple website might range from $2,000 to $7,000, while custom e-commerce platforms can exceed $10,000.
      </>
    ),
  },
  {
    question: "How long does the development process take?",
    answer: (
      <>
       A medium complexity project typically takes between 6-12 months.
      </>
    ),
  },
  {
    question: "Why choose AKC?",
    answer: (
      <>
       With over 10 years of experience and 300+ projects, Cubix is trusted by leading companies for its reliable web development services.
      </>
    ),
  },
];

export default function FAQ() {
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
              <div className="p-4 bg-transparent">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
