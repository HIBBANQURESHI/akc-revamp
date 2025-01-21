import React, { useState } from "react";

const faqs = [
  {
    question: "Why should I choose AKC Link Tech for web development?",
    answer: (
      <>
        As a leading website designing development company, we provide innovative, reliable, and affordable web development solutions.
      </>
    ),
  },
  {
    question: "Do you cater to small businesses?",
    answer: (
      <>
       Of course. We specialize as a small business web development agency, offering cost-effective solutions without compromising on quality.
      </>
    ),
  },
  {
    question: "Can you develop cross-platform applications?",
    answer: (
      <>
       Yes, as a cross-platform web application development consultant, we create apps that work seamlessly across all devices.
      </>
    ),
  },
  {
    question: "What sets your custom services apart?",
    answer: (
      <>
      Our custom web development services are crafted to align with your specific business goals, ensuring maximum impact.
      </>
    ),
  },
  {
    question: "Do you offer local business solutions?",
    answer: (
      <>
       Yes, we specialize in local business web development, empowering businesses to connect with their communities online.
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
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-left mb-6 text-sky-300 px-32">Frequently Asked Questions for Website Design and Development Company</h1>

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
