import React, { useState } from "react";

const faqs = [
    {
      question: "What are your Facebook marketing services?",
      answer: (
        <>
We provide your business with targeted advertising, Facebook page management, engaging content creation, audience interaction, and performance tracking. All done on one of the world's finest social platforms, this helps you achieve community growth, brand recognition, and conversion variants.        </>
      ),
    },
    {
      question: "How can Instagram marketing services benefit my business?",
      answer: (
        <>
With our Instagram marketing services, we produce engaging posts, stories, and ads that fit within the aesthetics of your branding and audience. From working with influencers to implementing Instagram's features like Reels and Shopping, we maximize brand visibility and interaction.        </>
      ),
    },
    {
      question: "What do Snapchat marketing services include?",
      answer: (
        <>
Our Snapchat marketing services entail fun, engaging, and interactive content for younger audiences. From sponsored filters to Snap ads, we ensure you maximize Snapchat's unique tools to create brand awareness and spark user action.        </>
      ),
    },
    {
      question: "How do Twitter marketing services help me reach my audience?",
      answer: (
        <>
With our Twitter marketing services, we ensure real-time relevance for your conversations. From trending hashtags to customer support, we engage your audience through strategic post-ups, Twitter ads, and influencer collaborations to connect with your audience on a deeper level.        </>
      ),
    },
    {
      question: "Why should I use YouTube marketing services?",
      answer: (
        <>
YouTube marketing services help build your brand using video content. We create compelling video strategies to seize your audience's attention and drive engagement on your YouTube profile, including ads, tutorials, and brand storytelling. Whether you want to increase your views or grow your subscriber base, we're here.        </>
      ),
    },
  ];
  
  

export default function SMMFaq() {
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
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">Common questions about SMM.</h1>

      <div className="w-3/5 md:w-4/5 py-20">
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
