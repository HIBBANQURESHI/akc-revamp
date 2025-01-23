import React, { useState } from "react";

const faqs = [
    {
      question: "What are the core features of your HR software solutions?",
      answer: (
        <>
Its core features include employee management, payroll processing, performance management, attendance tracking, benefits administration, recruitment, and compliance tracking, which aim to improve HR operations and overall efficiency.        </>
      ),
    },
    {
      question: "Can your HR software integrate with existing systems?",
      answer: (
        <>
Yes, our HR solutions are designed with integration capabilities that allow seamless connections with your existing systems, such as payroll, accounting, and CRM software. This enables an uninterrupted flow of data across your organization and minimizes manual entry errors.        </>
      ),
    },
    {
      question: "Is your HR software mobile-friendly for remote teams?",
      answer: (
        <>
Yes, our HR solution is fully mobile and responsive design, so remote employees can perform HR functions on a smartphone or tablet, whether for attendance tracking, requesting time off, or performance reviews.        </>
      ),
    },
    {
      question: "Can I track employee performance using your HR software?",
      answer: (
        <>
Yes, our HR software has strong performance-tracking features. For example, this software allows managers to create goals, give feedback, conduct performance reviews, and monitor progress through intuitive dashboards that allow them to make data-driven decisions to enhance employee performance.        </>
      ),
    },
    {
      question: "Why should I choose AKC Link Tech Digitizing for HR software development?",
      answer: (
        <>
AKC Link Tech Digitizing is important because of our credentials in building custom HR solutions on a specialty basis meant for all of your businesses. Our innovation merges with experience and high-end technology to create unique HR software that is efficient, scalable, and secure, assisting with business growth and improving employee management.
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
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300 px-32">Frequently asked questions.</h1>

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
