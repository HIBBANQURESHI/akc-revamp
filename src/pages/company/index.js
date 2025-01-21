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
      title: "Trust Comes First",
      description:
        "Before we dive into the exciting stuff, we lock down your intellectual property. Every conversation starts with an iron-clad NDA because your brilliant ideas deserve Pentagon-level protection.",
    },
    {
      number: "02",
      title: "Deep-Dive Discovery",
      description:
        "In this step, we'll get to know your vision inside and out, mapping out timelines and resources that align perfectly with your goals. No detail is too small when we're building your digital future.",
    },
    {
      number: "03",
      title: "Strategy Sprint",
      description:
        "Our team of digital architects puts their heads together to craft your success blueprint. We'll evaluate every angle, identify potential challenges, and create a detailed game plan.",
    },
    {
      number: "04",
      title: "Design Mastery",
      description:
        "Our UI/UX experts are pro at creating experiences that users fall in love with. We blend stunning visuals with intuitive functionality wrapped up in your brand's unique personality.",
    },
    {
      number: "05",
      title: "Agile Excellence",
      description:
        "We break down your project into bite-sized sprints that deliver results effortlessly. This approach keeps you in the driver's seat, with regular updates and the flexibility to pivot when inspiration strikes.",
    },
    {
      number: "06",
      title: "Quality Assurance",
      description:
        "Our quality assurance professionals leave no stone unturned. Every click, swipe, and interaction is tested with precision. We're not happy until your solution runs smoother.",
    },
    {
      number: "07",
      title: "Support That Never Sleeps",
      description:
        "Our dedicated support team sticks with you like your favorite smartphone case, providing updates, maintenance, and peace of mind. Think of us as your digital guardians.",
    },
    {
      number: "08",
      title: "Future-Proof Success",
      description:
        "We don't just launch and wave goodbye. Your solution goes live with comprehensive documentation, continuous monitoring, and optimization plans that keep you ahead of the curve.",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Intro Section */}
      <div className="py-20 px-6 sm:px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">
        The Steps Towards Your Brand’s Success
        </h2>
        <p className="py-5 text-black text-xl sm:text-2xl lg:text-2xl font-normal text-left mb-6 leading-relaxed">
        At AKC Link Tech Digitizing, we believe great solutions are built on rock-solid accountability, crystal-clear communication, and partnerships that feel like family. Here's how we turn you into an industry leader.
        </p>
      </div>

      {/* "We Start Here" Section */}
      <div className="px-6 sm:px-10 lg:px-72 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-12 text-black">
        The Journey to Excellence
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

      <div
            style={{
              backgroundImage: `
                radial-gradient(circle at left center, #7dd3fc 5%, transparent 50%), 
                radial-gradient(circle at right center, #7dd3fc 5%, transparent 50%)`,
              backgroundColor: "#fff",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="text-center"
          >
        <motion.p
          className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ready to Light the Fuse?
        </motion.p>
        <motion.h2
          className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Let's Cut to the Chase
          <span className="py-5 block"></span>
        </motion.h2>
      </div>

      <div className="py-16"></div>

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
