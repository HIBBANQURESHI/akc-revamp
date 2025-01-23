import React, { useState } from "react";

const faqs = [
  {
    question: "Do you offer wearable app development for businesses?",
    answer: (
      <>
        Yes. We specialize in wearable app development to assist businesses in building great innovative solutions for wearable devices. We provide custom wearable device app development services to enhance user experiences on smartwatches, fitness trackers, and more.      
      </>
    ),
  },
  {
    question: "What are the benefits of working with a cross-platform app development company?",
    answer: (
      <>
       A cross-platform app development company develops efficient solutions across different platforms, such as iOS and Android. This reduces time and costs, as the same app is deployed across platforms, maximizing user reach via multiplatform mobile app development services.  
      </>
    ),
  },
  {
    question: "How do I get started with an app development consultant?",
    answer: (
      <>
       This is a relatively easy process: you contact our experienced app development consultants, who will gauge your needs, provide custom solutions, and ensure smooth development.
      </>
    ),
  },
  {
    question: "What industries do you serve with application development services?",
    answer: (
      <>
        We serve industry verticals such as healthcare, education, e-commerce, etc. Our expertise covers mobile application services, wearable app development, and custom app development.
      </>
    ),
  },
  {
    question: "Can you assist with the multiplatform mobile app development service?",
    answer: (
      <>
       Our multiplatform mobile development service allows your app to reach as many users as possible while delivering the same great user experience across all platforms.
      </>
    ),
  },
];

export default function MobileFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active item
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 ">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300 px-32">Frequently Asked Questions for Mobile App Development Services</h1>

      <div className="w-3/5 md:w-4/5 py-14">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-transparent p-4 rounded-lg cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="text-3xl sm:text-lg lg:text-3xl font-semibold bg-transparent">{faq.question}</div>
              <div
                className={`transform transition-all duration-300 ${
                  activeIndex === index ? "rotate-45" : "text-3xl"
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
              <div className="p-4 bg-gradient-to-r from-sky-300/80 to-white rounded-3xl text-lg sm:text-lg lg:text-xl">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
