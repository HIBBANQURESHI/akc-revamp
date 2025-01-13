import React, { useState } from "react";

const faqs = [
  {
    question: "How long does it take to develop an Android app?",
    answer: (
      <>
        Development timelines vary by project complexity. On average, it can take 4-12 months from concept to launch.
      </>
    ),
  },
  {
    question: "What is the cost of Android app development?",
    answer: (
      <>
       Development costs range from $70,000 to $200,000, depending on the app’s features and technology stack.  
      </>
    ),
  },
  {
    question: "Why should I choose AKC over other developers?",
    answer: (
      <>
       Our experience with global brands, proven processes, and certified developers set us apart, ensuring your app is built to the highest standards.
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
