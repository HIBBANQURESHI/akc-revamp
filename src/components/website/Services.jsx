import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development Consulting",
      description:
        "Our web development consultant team map your journey to digital dominance. We make you the market trend.",
    },
    {
      title: "Custom Web Development",
      description:
        "When you need custom web development services that make your competition lose sleep, we deliver.",
    },
    {
      title: "Web Design and Development Services",
      description:
        "As a professional website development services provider, we create experiences that turn your website in a revenue machine.",
    },
    {
      title: "Ecommerce Development",
      description:
        "We're not just another web portal development company; we're your partner in ecommerce excellence.",
    },
    {
      title: "Web Application Development",
      description:
        "Our cross-platform web application development consultant team makes sure your apps work everywhere.",
    },
    {
      title: "Progressive Web Apps (PWAs)",
      description:
        "The future of web development services company USA is here. We build PWAs that load faster than your user’s power to blink.",
    },
    {
      title: "CMS Development",
      description:
        "As a website development service provider, we create management systems that make content updates a breeze.",
    },
    {
      title: "API Development & Integration",
      description:
        "Small business web development agency expertise meets enterprise-grade integration. We make systems talk to each other like old friends.",
    },
    {
      title: "Staff Augmentation",
      description:
        "Extend your team with top-tier developers to accelerate your projects cause our affordable web development experts are ready to jump in.",
    },
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-lg h-full"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-black mb-4">{service.title}</h3>
            <p className="text-black text-3xl sm:text-4xl lg:text-2xl flex-grow py-7">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
