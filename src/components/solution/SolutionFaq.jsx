import React, { useState } from "react";

const faqs = [
    {
      question: "What are the key features of HR software?",
      answer: (
        <>
          As a full-featured industry-leading HR solution, some of the robust features of HappyForce include real-time, time and attendance tracking, training management, event coordination, performance reviews, recruitment, paperless onboarding, payroll integration, and more. It empowers organizations across sectors with a centralized, user-friendly platform for simplified and optimized HR management.
        </>
      ),
    },
    {
      question: "What sets AKC apart in HR Software Development Services?",
      answer: (
        <>
          AKC stands out for 14+ years of excellence in HR technology. We transform people's strategies through trailblazing HR software that empowers workforce optimization. A customer-centric approach and agile methodology ensure innovative, scalable, and user-friendly HR solutions deliver phenomenal results.
        </>
      ),
    },
    {
      question: "How can I get started with Cubix's HR software solutions for my business?",
      answer: (
        <>
          Reach out, and our experts will analyze your HR processes and gather insights to develop cutting-edge employee management software tailored to your vision. AKC is dedicated to crafting effective HR management solutions that drive organizational success.
        </>
      ),
    },
  ];
  
  

export default function SolutionFaq() {
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
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300 px-32">Frequently asked questions.</h1>

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
