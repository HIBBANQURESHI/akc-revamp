import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development Consulting",
      description: "Get expert advice and define your project scope for a smooth development process.",
    },
    {
      title: "Custom Web Development",
      description: "Create tailored solutions, from CRM systems to SaaS applications, designed to boost engagement and growth.",
    },
    {
      title: "Web Design Services",
      description: "Beautiful and functional web designs that reflect your brand’s values.",
    },
    {
      title: "Ecommerce Development",
      description: "Build feature-rich ecommerce platforms that drive sales and customer satisfaction.",
    },
    {
      title: "Web Application Development",
      description: "Custom web apps designed for ease of use and operational alignment.",
    },
    {
      title: "Progressive Web Apps (PWAs)",
      description: "Reach your audience anytime with apps that offer native-like experiences.",
    },
    {
      title: "CMS Development",
      description: "Simplify content management with custom CMS platforms.",
    },
    {
      title: "API Development & Integration",
      description: "Enhance functionality with powerful APIs.",
    },
    {
      title: "Staff Augmentation",
      description: "Access skilled web developers on demand to meet your project needs.",
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

export default Services;
