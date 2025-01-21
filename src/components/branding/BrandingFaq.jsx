import React, { useState } from "react";

const faqs = [
    {
      question: "What industries do your branding services cover?",
      answer: (
        <>
We offer custom logo design and brand strategy development for industries including finance, healthcare, media, telecom, logistics, automotive, real estate, education, and energy. No matter what market you belong to, we have the talent to establish your brand.        </>
      ),
    },
    {
      question: "What sets your designs apart from others?",
      answer: (
        <>
Our American logo designers fuse creativity, research, and strategy to create logos and branding assets that look stunning and dialogue with regard to your business objectives. With our logo branding design services, your brand will shine more brightly than any competition.        </>
      ),
    },
    {
      question: "Can you update or modernize my existing logo?",
      answer: (
        <>
          Of course. As part of our branding development services, we provide logo revamp services. Whether you need a minor update or a major change, we can modernize your logo while keeping its essence intact.
        </>
      ),
    },
    {
      question: "Are your designs optimized for various platforms?",
      answer: (
        <>
All our designs are responsive, adaptable, and scalable—perfect for business cards and billboards. Our custom branding services are optimized for print and digital.        </>
      ),
    },
    {
      question: "How can I get started with your branding services?",
      answer: (
        <>
It’s easy. Call us today to discuss your needs. Our Branding Strategy Service will walk you through the stages of creating a branding solution that will distinguish your company.        </>
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
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300 px-32">Common questions about Branding.</h1>

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
