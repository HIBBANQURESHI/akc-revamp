import React from "react";

const LogoServices = () => {
  const services = [
    {
      title: "Logo Design Consulting",
      description: "Get expert advice to define your brand identity and ensure a smooth design process.",
    },
    {
      title: "Custom Logo Design",
      description: "Create unique, tailored logos that capture the essence of your brand and set you apart.",
    },
    {
      title: "Brand Identity Design",
      description: "Design cohesive and impactful brand identities that reflect your values and resonate with your audience.",
    },
    {
      title: "Ecommerce Logo Design",
      description: "Develop logos that enhance your ecommerce brand and appeal to your target market.",
    },
    {
      title: "Logo Redesign Services",
      description: "Revitalize your brand with a fresh logo that aligns with current trends while staying true to your essence.",
    },
    {
      title: "Minimalist Logo Design",
      description: "Create sleek and simple logos that communicate your brand’s message with clarity and elegance.",
    },
    {
      title: "Logo Animation",
      description: "Bring your logo to life with dynamic animations for an engaging digital presence.",
    },
    {
      title: "Logo Design for Apps & Websites",
      description: "Design versatile logos optimized for digital platforms, ensuring a seamless brand experience across all mediums.",
    },
    {
      title: "Staff Augmentation for Design Projects",
      description: "Access skilled logo designers to enhance your project and meet specific design needs.",
    },
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-left">
            <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
            <p className="text-gray-700 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoServices;
