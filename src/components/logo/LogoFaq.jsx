import React, { useState } from "react";

const faqs = [
    {
      question: "What differentiates your logo designing services?",
      answer: (
        <>
Our logo designers in America create strikingly elegant logos that represent the disposition of your brand. Providing quality, innovation, and customization is in the vein of our logo branding design services.        </>
      ),
    },
    {
      question: "How do you ensure my logo will stand out in the market?",
      answer: (
        <>
We conduct in-depth market research to invent logos that best suit the requirements of your target audience, while our brand management services ensure that the identity evolves with ongoing market trends.        </>
      ),
    },
    {
      question: "Can I request modifications for my logo?",
      answer: (
        <>
Yes. We provide revisions until you are absolutely satisfied. A custom logo design entails working rounds of feedback to perfect your logo with everyone's collaboration.        </>
      ),
    },
    {
      question: "Do you design logos for startups?",
      answer: (
        <>
Yes. That's one of our specifications. We specialize in providing brand strategy and custom logo design services for fledgling businesses, equipping them with a fair and unique identity in the unpredictable competitive market.        </>
      ),
    },
    {
      question: "How do I get started with you?",
      answer: (
        <>
It’s simple. Contact us to discuss your needs in detail. Our team will work very closely with you to guide you through the brand development services that best match your project goals.        </>
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
    <div className="flex flex-col px-14 mt-8">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">Common questions about web development.</h1>

      <div className="w-3/5 md:w-4/5 py-14">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-transparent p-4 rounded-lg cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="text-3xl sm:text-lg lg:text-3xl font-semibold bg-transparent text-black">{faq.question}</div>
              <div
                className={`transform transition-all duration-300 text-black ${
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
              <div className="text-black p-4 bg-gradient-to-r from-sky-300/80 to-white rounded-3xl text-lg sm:text-lg lg:text-xl">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
