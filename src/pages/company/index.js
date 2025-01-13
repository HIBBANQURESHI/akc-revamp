import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import { motion } from "framer-motion"; // Import Framer Motion
import Footer from "@/components/Footer";

// Card Component
const Card = ({ number, title, description, animation }) => (
  <motion.div
    className="flex flex-col lg:flex-row items-start lg:items-center mb-16 space-y-6 lg:space-y-0 lg:space-x-8"
    initial={{ opacity: 0, x: animation === "fade-left" ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }} // Trigger fade effect when in view
    viewport={{ once: false, amount: 0.1 }} // Trigger when 10% of element is in the view
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="text-sky-300 text-5xl font-bold">{number}</div>
    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Index = () => {
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
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">
          Our process
        </h2>
        <p className="py-5 text-black text-xl sm:text-2xl lg:text-4xl font-normal text-left mb-6 leading-relaxed">
          At AKC, we deliver successful products by doing three things being
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
              animation={index % 2 === 0 ? "fade-left" : "fade-left"} // Alternating animations
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <motion.p
          className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Pull The Trigger!
        </motion.p>
        <motion.h2
          className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Let's bring your
          <span className="py-5 block">vision to life.</span>
        </motion.h2>
      </div>

      {/* Footer Section */}
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
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
