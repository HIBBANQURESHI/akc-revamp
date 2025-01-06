import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Footer from "@/components/Footer";

// Card Component
const Card = ({ number, title, description, image, animation }) => (
  <div
    className="flex flex-col lg:flex-row items-start lg:items-center mb-16 space-y-6 lg:space-y-0 lg:space-x-8"
    data-aos={animation}
    data-aos-duration="1000"
  >
    <div className="text-yellow-500 text-5xl font-bold">{number}</div>
    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: false });

    // Refresh AOS on scroll
    const refreshAOS = () => AOS.refresh();
    window.addEventListener("scroll", refreshAOS);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", refreshAOS);
  }, []);

  // Content for cards
  const cardData = [
    {
      number: "01",
      title: "IP Protection",
      description:
        "AKC prioritizes intellectual property protection, commencing every project with an NDA to safeguard crucial client information.",
    },
    {
      number: "02",
      title: "Consultation & Project Discovery",
      description:
        "In-depth discussions refine the scope, timelines, and resource allocation to align with project requirements and objectives.",
    },
    {
      number: "03",
      title: "Rapid Strategy Workshop",
      description:
        "AKC identifies the optimal development approach, evaluates risks, and prepares a detailed (LOE) level of effort document.",
    },
    {
      number: "04",
      title: "User Interfaces & Experiences",
      description:
        "Seasoned UI/UX architects craft visually captivating and user-centric designs that seamlessly integrate with your brand identity.",
    },
    {
      number: "05",
      title: "Agile Development Approach",
      description:
        "The project is methodically broken down into sprints, enabling continuous feedback, rapid iteration, and efficient execution.",
    },
    {
      number: "06",
      title: "Testing & Quality Assurance",
      description:
        "Dedicated quality assurance team conducts comprehensive testing to ensure high performance, reliability, and a flawless user experience.",
    },
    {
      number: "07",
      title: "Support & Maintenance",
      description:
        "After deployment, Cubix provides comprehensive maintenance and responsive support to guarantee lasting project success.",
    },
    {
      number: "08",
      title: "Deployment & Beyond",
      description:
        "The final solution is deployed with thorough documentation and monitoring, optimized for continuous improvement and long-term viability.",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Intro Section */}
      <div className="py-20 px-6 sm:px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-yellow-500">
          Our process
        </h2>
        <p className="py-5 text-black text-xl sm:text-2xl lg:text-4xl font-light text-left mb-6 leading-relaxed">
          At AKC, we deliver successful products by doing three things: being
          accountable for our projects, making our methods transparent, and
          building strong relationships with our clients.
        </p>
      </div>

      {/* "We Start Here" Section */}
      <div className="px-6 sm:px-10 lg:px-72 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-12 text-black">
          We start here
        </h2>

        {/* Cards Section */}
        <div className="space-y-16">
          {cardData.map((card, index) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
              animation={index % 2 === 0 ? "fade-left" : "fade-right"}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-16" data-aos="fade-down" data-aos-duration="1000">
          <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6"> Pull The Trigger! </p>
          <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6" >
              Let's bring your 
              <span className="py-5 block">vision to life.</span>
              
            </h2>
        </div>

      {/* Footer Section */}
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
          backgroundColor: "#3b82f6",
          backgroundSize: "100% 100%",
        }}
        className="py-12"
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;
